# -*- coding: utf-8 -*-
from plone import api
from plone.app.layout.viewlets.common import ViewletBase
from plone.memoize import ram
from rer.chatbot.client.interfaces import IRERChatBotSettings
from time import time

import pkg_resources

import logging

logger = logging.getLogger(__name__)


def render_cachekey(method, self, path):
    """
    keep cache for 1 hour for the same path
    """
    return '{0}-{1}'.format(time() // (60 * 60), path)


class RERChatBotViewlet(ViewletBase):
    """ 
    """

    def isEnabled(self):
        """
        @return: True only if current context is inside given path.
        """
        start_folder = api.portal.get_registry_record(
            'start_folder', interface=IRERChatBotSettings
        )
        if not start_folder:
            return True
        folder = self.get_folder_context(path=start_folder)
        if not folder:
            return False
        for step in self.context.aq_chain:
            if step == folder:
                return True
        return False

    @ram.cache(render_cachekey)
    def get_folder_context(self, path):
        """
        """
        if not path.startswith('/'):
            path = '/{0}'.format(path)
        return api.content.get(path)

    def render(self):
        """ Render viewlet only if it is enabled.

        """
        # Perform some condition check
        if self.isEnabled():
            return self.index()
        else:
            # No output when the viewlet is disabled
            return ""

    @ram.cache(lambda *args: time() // (60 * 60))
    def get_package_version(self):
        """
        used for cache
        """
        return pkg_resources.get_distribution("rer.chatbot.client").version
