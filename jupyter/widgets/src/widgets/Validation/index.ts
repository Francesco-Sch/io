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
import Validation from "./Validation.svelte";

export class ValidationModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: ValidationModel.model_name,
			_model_module: ValidationModel.model_module,
			_model_module_version: ValidationModel.model_module_version,
			_view_name: ValidationModel.view_name,
			_view_module: ValidationModel.view_module,
			_view_module_version: ValidationModel.view_module_version,
			VaildationStatus: "",
			ValidationMessage: "",
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "ValidationModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "ValidationView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class ValidationView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new Validation({ target: this.el });
	}
}
