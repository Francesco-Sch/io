#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, Integer
from .._frontend import module_name, module_version

class PinterestLogin(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('PinterestLoginModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('PinterestLoginView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    PinterestLoginUserName = Unicode('Enter your username').tag(sync=True)
    PinterestLoginPassword = Unicode('Enter your password').tag(sync=True)