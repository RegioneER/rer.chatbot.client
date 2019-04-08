# -*- coding: utf-8 -*-
from plone import api
from Products.Five.browser import BrowserView
from rer.chatbot.client.interfaces import IRERChatBotSettings

import json


class View(BrowserView):
    """
    """

    def __call__(self):
        JSON = json.dumps(self.get_data())
        self.request.response.setHeader("Content-type", "application/json")
        return JSON

    def get_data(self):
        return {
            'serviceUrl': api.portal.get_registry_record(
                'service_url', interface=IRERChatBotSettings
            ),
            'serviceToken': api.portal.get_registry_record(
                'service_token', interface=IRERChatBotSettings
            ),
            'welcomeMessage': api.portal.get_registry_record(
                'chat_welcome_message', interface=IRERChatBotSettings
            ),
            'title': api.portal.get_registry_record(
                'chat_title', interface=IRERChatBotSettings
            ),
            'subtitle': api.portal.get_registry_record(
                'chat_subtitle', interface=IRERChatBotSettings
            ),
            'senderPlaceHolder': api.portal.get_registry_record(
                'chat_sender_placeholder', interface=IRERChatBotSettings
            ),
            'logoUrl': api.portal.get_registry_record(
                'chat_logo_url', interface=IRERChatBotSettings
            ),
        }

