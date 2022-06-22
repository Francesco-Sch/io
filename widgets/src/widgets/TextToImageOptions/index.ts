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
import TextToImageOptions from "./TextToImageOptions.svelte";

export class TextToImageOptionsModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: TextToImageOptionsModel.model_name,
			_model_module: TextToImageOptionsModel.model_module,
			_model_module_version: TextToImageOptionsModel.model_module_version,
			_view_name: TextToImageOptionsModel.view_name,
			_view_module: TextToImageOptionsModel.view_module,
			_view_module_version: TextToImageOptionsModel.view_module_version,

			TextToImageOptionFolder: "",
			TextToImageOptionWidth: NaN,
			TextToImageOptionHeight: NaN,
			TextToImageOptionIterations: NaN,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "TextToImageOptionsModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "TextToImageOptionsView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class TextToImageOptionsView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new TextToImageOptions({ target: this.el });
	}
}
