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
import CrawlerLinks from "./CrawlerLinks.svelte";

export class CrawlerLinksModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: CrawlerLinksModel.model_name,
			_model_module: CrawlerLinksModel.model_module,
			_model_module_version: CrawlerLinksModel.model_module_version,
			_view_name: CrawlerLinksModel.view_name,
			_view_module: CrawlerLinksModel.view_module,
			_view_module_version: CrawlerLinksModel.view_module_version,

			CrawlerLinks: [],
			CrawlerOutputFolder: "",
			CrawlerImagesAmount: 0,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "CrawlerLinksModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "CrawlerLinksView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class CrawlerLinksView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new CrawlerLinks({ target: this.el });
	}
}
