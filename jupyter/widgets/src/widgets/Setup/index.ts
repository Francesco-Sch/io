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
import Setup from "./Setup.svelte";

export class SetupModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: SetupModel.model_name,
			_model_module: SetupModel.model_module,
			_model_module_version: SetupModel.model_module_version,
			_view_name: SetupModel.view_name,
			_view_module: SetupModel.view_module,
			_view_module_version: SetupModel.view_module_version,
			SetupProcessing: true,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "SetupModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "SetupView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class SetupView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new Setup({ target: this.el });
	}
}
