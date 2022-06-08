#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget
from traitlets import Unicode, Integer, List
from .._frontend import module_name, module_version

class PinterestLinks(DOMWidget):
    _model_name = Unicode('PinterestLinksModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('PinterestLinksView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    PinterestLinks = List([]).tag(sync=True)
    PinterestOutputFolder = Unicode('').tag(sync=True)
    PinterestImagesAmount = Integer(0).tag(sync=True)