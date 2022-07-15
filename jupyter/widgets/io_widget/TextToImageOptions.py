#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget
from traitlets import Unicode, Integer
from ._frontend import module_name, module_version

class TextToImageOptions(DOMWidget):
    _model_name = Unicode('TextToImageOptionsModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('TextToImageOptionsView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    TextToImageOptionFolder = Unicode('').tag(sync=True)
    TextToImageOptionWidth = Integer().tag(sync=True)
    TextToImageOptionHeight = Integer().tag(sync=True)
    TextToImageOptionIterations = Integer().tag(sync=True)