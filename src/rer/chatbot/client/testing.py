# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import rer.chatbot.client


class RerChatbotClientLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=rer.chatbot.client)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'rer.chatbot.client:default')


RER_CHATBOT_CLIENT_FIXTURE = RerChatbotClientLayer()


RER_CHATBOT_CLIENT_INTEGRATION_TESTING = IntegrationTesting(
    bases=(RER_CHATBOT_CLIENT_FIXTURE,),
    name='RerChatbotClientLayer:IntegrationTesting',
)


RER_CHATBOT_CLIENT_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(RER_CHATBOT_CLIENT_FIXTURE,),
    name='RerChatbotClientLayer:FunctionalTesting',
)


RER_CHATBOT_CLIENT_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        RER_CHATBOT_CLIENT_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE,
    ),
    name='RerChatbotClientLayer:AcceptanceTesting',
)
