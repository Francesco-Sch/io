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
import PinterestLogin from "./PinterestLogin.svelte";

export class PinterestLoginModel extends DOMWidgetModel {
	defaults() {
		return {
			...super.defaults(),
			_model_name: PinterestLoginModel.model_name,
			_model_module: PinterestLoginModel.model_module,
			_model_module_version: PinterestLoginModel.model_module_version,
			_view_name: PinterestLoginModel.view_name,
			_view_module: PinterestLoginModel.view_module,
			_view_module_version: PinterestLoginModel.view_module_version,
			PinterestLoginUserName: "Enter your username",
			PinterestLoginPassword: "Enter your password",
		};
	}

	static serializers: ISerializers = {
		...DOMWidgetModel.serializers,
		// Add any extra serializers here
	};

	static model_name = "PinterestLoginModel";
	static model_module = MODULE_NAME;
	static model_module_version = MODULE_VERSION;
	static view_name = "PinterestLoginView"; // Set to null if no view
	static view_module = MODULE_NAME; // Set to null if no view
	static view_module_version = MODULE_VERSION;
}

export class PinterestLoginView extends DOMWidgetView {
	render() {
		setStoreModels(this.model);
		new PinterestLogin({ target: this.el });
	}
}
