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
import PinterestLinks from "./PinterestLinks.svelte";

export class PinterestLinksModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: PinterestLinksModel.model_name,
			_model_module: PinterestLinksModel.model_module,
			_model_module_version: PinterestLinksModel.model_module_version,
			_view_name: PinterestLinksModel.view_name,
			_view_module: PinterestLinksModel.view_module,
			_view_module_version: PinterestLinksModel.view_module_version,

			PinterestLinks: {},
			PinterestOutputFolder: "",
			PinterestImagesAmount: 0,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "PinterestLinksModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "PinterestLinksView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class PinterestLinksView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new PinterestLinks({ target: this.el });
	}
}
