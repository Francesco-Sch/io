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
import PinterestScraper from "./PinterestScraper.svelte";

export class PinterestScraperModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: PinterestScraperModel.model_name,
			_model_module: PinterestScraperModel.model_module,
			_model_module_version: PinterestScraperModel.model_module_version,
			_view_name: PinterestScraperModel.view_name,
			_view_module: PinterestScraperModel.view_module,
			_view_module_version: PinterestScraperModel.view_module_version,
			PinterestScraperClick: false
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "PinterestScraperModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "PinterestScraperView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class PinterestScraperView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new PinterestScraper({ target: this.el });
	}
}
