#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget, widget_serialization
from traitlets import Unicode, Dict
from ._frontend import module_name, module_version

class Validation(DOMWidget):
    _model_name = Unicode('ValidationModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('ValidationView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    ValidationStatus = Unicode().tag(sync=True)
    ValidationMessage = Unicode().tag(sync=True)