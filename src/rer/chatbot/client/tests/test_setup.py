# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from rer.chatbot.client.testing import RER_CHATBOT_CLIENT_INTEGRATION_TESTING  # noqa

import unittest


class TestSetup(unittest.TestCase):
    """Test that rer.chatbot.client is properly installed."""

    layer = RER_CHATBOT_CLIENT_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if rer.chatbot.client is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'rer.chatbot.client'))

    def test_browserlayer(self):
        """Test that IRerChatbotClientLayer is registered."""
        from rer.chatbot.client.interfaces import (
            IRerChatbotClientLayer)
        from plone.browserlayer import utils
        self.assertIn(
            IRerChatbotClientLayer,
            utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = RER_CHATBOT_CLIENT_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        roles_before = api.user.get_roles(TEST_USER_ID)
        setRoles(self.portal, TEST_USER_ID, ['Manager'])
        self.installer.uninstallProducts(['rer.chatbot.client'])
        setRoles(self.portal, TEST_USER_ID, roles_before)

    def test_product_uninstalled(self):
        """Test if rer.chatbot.client is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'rer.chatbot.client'))

    def test_browserlayer_removed(self):
        """Test that IRerChatbotClientLayer is removed."""
        from rer.chatbot.client.interfaces import \
            IRerChatbotClientLayer
        from plone.browserlayer import utils
        self.assertNotIn(
            IRerChatbotClientLayer,
            utils.registered_layers())
