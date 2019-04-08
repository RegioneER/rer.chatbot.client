# -*- coding: utf-8 -*-
from rer.chatbot.client import _
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer


class IRerChatbotClientLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class IRERChatBotSettings(Interface):
    """ """

    start_folder = schema.TextLine(
        title=_('start_folder_label', default=u'Chatbot folder'),
        description=_(
            'start_folder_help',
            default=u'Insert the sub-path where you want to display the'
            u' chatbot. If empty, chatbot will be available everywhere.',
        ),
        required=False,
        default=u'',
    )

    service_url = schema.TextLine(
        title=_('service_url_label', default=u'Service url'),
        description=_(
            'service_url_help',
            default=u'Insert the url of the chatbot service.',
        ),
        required=True,
        default=u'',
    )

    service_token = schema.TextLine(
        title=_('service_token_label', default=u'Service token'),
        description=_('service_token_help', default=u'If needed, set a token.'),
        required=False,
        default=u'',
    )

    chat_welcome_message = schema.TextLine(
        title=_('chat_welcome_message_label', default=u'Chat welcome message'),
        description=_(
            'chat_welcome_message_help',
            default=u'Set the welcome message when user opens the chat.',
        ),
        required=False,
        default=u'',
    )

    chat_title = schema.TextLine(
        title=_('chat_title_label', default=u'Chat title'),
        description=_(
            'chat_title_help',
            default=u'Set the title shown in the chat window.',
        ),
        required=False,
        default=u'',
    )

    chat_subtitle = schema.TextLine(
        title=_('chat_subtitle_label', default=u'Chat subtitle'),
        description=_(
            'chat_subtitle_help',
            default=u'Set the subtitle show in the chat window.',
        ),
        required=False,
        default=u'',
    )

    chat_sender_placeholder = schema.TextLine(
        title=_('chat_sender_placeholder_label', default=u'Sender placeholder'),
        description=_(
            'chat_sender_placeholder_help',
            default=u'Set the placeholder label in chat input field.',
        ),
        required=False,
        default=u'',
    )
    chat_logo_url = schema.TextLine(
        title=_('chat_logo_url_label', default=u'Chat logo'),
        description=_(
            'chat_logo_url_help', default=u'Url to set a logo for the chat.'
        ),
        required=False,
        default=u'',
    )
