// Copyright (c) Francesco Scheffczyk
// Distributed under the terms of the Modified BSD License.

import {
	DOMWidgetModel,
	DOMWidgetView,
	ISerializers,
} from "@jupyter-widgets/base";
import { setStoreModels } from "../../stores";

import { MODULE_NAME, MODULE_VERSION } from "../../version";

// Import Svelte file
import CrawlerInit from "./CrawlerInit.svelte";

export class CrawlerInitModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: CrawlerInitModel.model_name,
			_model_module: CrawlerInitModel.model_module,
			_model_module_version: CrawlerInitModel.model_module_version,
			_view_name: CrawlerInitModel.view_name,
			_view_module: CrawlerInitModel.view_module,
			_view_module_version: CrawlerInitModel.view_module_version,
			CrawlerInitClick: false,
			CrawlerInitRunning: false,
			CrawlerInitFinished: false,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "CrawlerInitModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "CrawlerInitView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class CrawlerInitView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new CrawlerInit({ target: this.el });
	}
}
