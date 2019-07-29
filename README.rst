.. This README is meant for consumption by humans and pypi. Pypi can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide.html
   This text does not appear on pypi or github. It is a comment.

===================
RER: Chatbot client
===================

Chatbot client designed for RER webservices.

It enable a chatbot interface in your website that talks with a remote service.

Features
--------

Threre is a controlpanel where you can configure:

- Remote service endpoint
- Remote service token and credentials
- Path where to show the chatbot icon (otherwise it will be available everywhere)
- Chat labels

Chat interface is also easily customizable with CSS in your custom theme.

Examples
--------

This add-on can be seen in action at the following sites:
- Is there a page on the internet where everybody can see the features?


Documentation
-------------

Full documentation for end users can be found in the "docs" folder, and is also available online at http://docs.plone.org/foo/bar


Translations
------------

This product has been translated into

- Klingon (thanks, K'Plai)


Installation
------------

Install rer.chatbot.client by adding it to your buildout::

    [buildout]

    ...

    eggs =
        rer.chatbot.client


and then running ``bin/buildout``


Contribute
----------

- Issue Tracker: https://github.com/collective/rer.chatbot.client/issues
- Source Code: https://github.com/collective/rer.chatbot.client
- Documentation: https://docs.plone.org/foo/bar


Support
-------

If you are having issues, please let us know.
We have a mailing list located at: project@example.com


License
-------

The project is licensed under the GPLv2.
