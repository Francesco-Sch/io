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
import CrawlerGallery from "./CrawlerGallery.svelte";

export class CrawlerGalleryModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: CrawlerGalleryModel.model_name,
			_model_module: CrawlerGalleryModel.model_module,
			_model_module_version: CrawlerGalleryModel.model_module_version,
			_view_name: CrawlerGalleryModel.view_name,
			_view_module: CrawlerGalleryModel.view_module,
			_view_module_version: CrawlerGalleryModel.view_module_version,

			CrawlerGalleryFolder: "",
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "CrawlerGalleryModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "CrawlerGalleryView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class CrawlerGalleryView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new CrawlerGallery({ target: this.el });
	}
}
