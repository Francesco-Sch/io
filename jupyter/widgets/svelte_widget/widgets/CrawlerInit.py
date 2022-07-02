#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Francesco Scheffczyk.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget
from traitlets import Unicode, Bool
from .._frontend import module_name, module_version

class CrawlerInit(DOMWidget):
    _model_name = Unicode('CrawlerInitModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('CrawlerInitView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    CrawlerInitClick = Bool(False).tag(sync=True)
    CrawlerInitRunning = Bool(False).tag(sync=True)
    CrawlerInitFinished = Bool(False).tag(sync=True)