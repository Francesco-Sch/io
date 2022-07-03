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
import TextToImageInit from "./TextToImageInit.svelte";

export class TextToImageInitModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: TextToImageInitModel.model_name,
			_model_module: TextToImageInitModel.model_module,
			_model_module_version: TextToImageInitModel.model_module_version,
			_view_name: TextToImageInitModel.view_name,
			_view_module: TextToImageInitModel.view_module,
			_view_module_version: TextToImageInitModel.view_module_version,

			TextToImageInitClick: false,
			TextToImageInitFolder: "",
			TextToImageInitFinished: false,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "TextToImageInitModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "TextToImageInitView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class TextToImageInitView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new TextToImageInit({ target: this.el });
	}
}
