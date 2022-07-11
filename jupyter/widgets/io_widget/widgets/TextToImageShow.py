#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget
from traitlets import Unicode, List

from .._frontend import module_name, module_version

class TextToImageShow(DOMWidget):
    _model_name = Unicode('TextToImageShowModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('TextToImageShowView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    TextToImageShowFolder = Unicode('').tag(sync=True)