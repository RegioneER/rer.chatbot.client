# -*- coding: utf-8 -*-
from plone.app.registry.browser import controlpanel
from rer.chatbot.client.interfaces import IRERChatBotSettings
from rer.chatbot.client import _


class RERChatBotSettingsForm(controlpanel.RegistryEditForm):

    schema = IRERChatBotSettings
    label = _('rer_chatbot_settings_label', default=u'Chatbot Settings')
    description = u''


class RERChatBotSettings(controlpanel.ControlPanelFormWrapper):
    form = RERChatBotSettingsForm
