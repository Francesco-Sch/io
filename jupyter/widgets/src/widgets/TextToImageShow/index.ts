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
import TextToImageShow from "./TextToImageShow.svelte";

export class TextToImageShowModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: TextToImageShowModel.model_name,
			_model_module: TextToImageShowModel.model_module,
			_model_module_version: TextToImageShowModel.model_module_version,
			_view_name: TextToImageShowModel.view_name,
			_view_module: TextToImageShowModel.view_module,
			_view_module_version: TextToImageShowModel.view_module_version,

			TextToImageShowFolder: "",
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "TextToImageShowModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "TextToImageShowView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class TextToImageShowView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new TextToImageShow({ target: this.el });
	}
}
