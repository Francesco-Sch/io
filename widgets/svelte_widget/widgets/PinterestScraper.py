#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget
from traitlets import Unicode, Bool
from .._frontend import module_name, module_version

class PinterestScraper(DOMWidget):
    _model_name = Unicode('PinterestScraperModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('PinterestScraperView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    PinterestScraperClick = Bool(False).tag(sync=True)