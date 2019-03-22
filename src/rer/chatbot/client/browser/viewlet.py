# -*- coding: utf-8 -*-
from plone.app.layout.viewlets.common import ViewletBase


class RERChatBotViewlet(ViewletBase):
    """ 
    """

    def isEnabled(self):
        """
        @return: Should this viewlet be rendered on this page.
        """
        # Some logic based self.context here whether JavaScript should be included on this page or not
        return True

    def render(self):
        """ Render viewlet only if it is enabled.

        """
        # Perform some condition check
        if self.isEnabled():
            return self.index()
        else:
            # No output when the viewlet is disabled
            return ""
