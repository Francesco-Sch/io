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
import TextToImagePrompt from "./TextToImagePrompt.svelte";

export class TextToImagePromptModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: TextToImagePromptModel.model_name,
			_model_module: TextToImagePromptModel.model_module,
			_model_module_version: TextToImagePromptModel.model_module_version,
			_view_name: TextToImagePromptModel.view_name,
			_view_module: TextToImagePromptModel.view_module,
			_view_module_version: TextToImagePromptModel.view_module_version,

			TextToImagePrompt: "",
			TextToImageAttributes: [],
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "TextToImagePromptModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "TextToImagePromptView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class TextToImagePromptView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new TextToImagePrompt({ target: this.el });
	}
}
