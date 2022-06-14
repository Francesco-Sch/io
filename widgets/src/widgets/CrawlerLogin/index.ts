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
import CrawlerLogin from "./CrawlerLogin.svelte";

export class CrawlerLoginModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: CrawlerLoginModel.model_name,
			_model_module: CrawlerLoginModel.model_module,
			_model_module_version: CrawlerLoginModel.model_module_version,
			_view_name: CrawlerLoginModel.view_name,
			_view_module: CrawlerLoginModel.view_module,
			_view_module_version: CrawlerLoginModel.view_module_version,
			CrawlerLoginUserName: "",
			CrawlerLoginPassword: "",
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "CrawlerLoginModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "CrawlerLoginView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class CrawlerLoginView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new CrawlerLogin({ target: this.el });
	}
}
