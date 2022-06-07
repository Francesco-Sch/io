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
import Widget from "./Widget.svelte";

export class SliderModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: SliderModel.model_name,
			_model_module: SliderModel.model_module,
			_model_module_version: SliderModel.model_module_version,
			_view_name: SliderModel.view_name,
			_view_module: SliderModel.view_module,
			_view_module_version: SliderModel.view_module_version,
			value: 1,
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "SliderModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "SliderView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class SliderView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new Widget({ target: this.el });
	}
}
