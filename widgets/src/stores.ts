import type { Writable } from "svelte/store";
import type { DOMWidgetModel } from "@jupyter-widgets/base";

import { writable } from "svelte/store";

interface WidgetWritable<T> extends Writable<T> {
	setModel: (m: DOMWidgetModel) => void;
}

export function WidgetWritable<T>(name_: string, value_: T): WidgetWritable<T> {
	const name: string = name_;
	const internalWritable: Writable<any> = writable(value_);
	let model: DOMWidgetModel;

	return {
		set: (v: any) => {
			internalWritable.set(v);
			if (model) {
				model.set(name, v);
				model.save_changes();
			}
		},
		subscribe: internalWritable.subscribe,
		update: (func: any) => {
			internalWritable.update((v: any) => {
				const output = func(v);
				if (model) {
					model.set(name, output);
					model.save_changes();
				}
				return output;
			});
		},
		setModel: (m: DOMWidgetModel) => {
			model = m;
			let modelValue = model.get(name);
			if (modelValue) internalWritable.set(modelValue);
			model.on(
				"change:" + name,
				() => internalWritable.set(model.get(name)),
				null
			);
		},
	};
}

// Declare stores with their associated Traitlets here.

// ----------------
// Example Widget
// ----------------
export const value = WidgetWritable<number>("value", 1);

// ----------------
// Pinterest Login
// ----------------
export const PinterestLoginUserName = WidgetWritable<string>(
	"PinterestLoginUserName",
	"Enter your username"
);
export const PinterestLoginPassword = WidgetWritable<string>(
	"PinterestLoginPassword",
	"Enter your password"
);

// ----------------
// Pinterest Links
// ----------------
export const PinterestLinks = WidgetWritable<Array<string>>(
	"PinterestLinks",
	[]
);
export const PinterestOutputFolder = WidgetWritable<string>(
	"PinterestOutputFolder",
	""
);
export const PinterestImagesAmount = WidgetWritable<number>(
	"PinterestImagesAmount",
	0
);

// ----------------
// Pinterest Scraper
// ----------------
export const PinterestScraperClick = WidgetWritable<boolean>(
	"PinterestScraperClick",
	false
);

// Set the model for each store you create.
export function setStoreModels(model: DOMWidgetModel): void {
	// Example Widget
	value.setModel(model);

	// Pinterest Login
	PinterestLoginUserName.setModel(model);
	PinterestLoginPassword.setModel(model);

	// Pinterest Links
	PinterestLinks.setModel(model);
	PinterestOutputFolder.setModel(model);
	PinterestImagesAmount.setModel(model);

	// Pinterest Scraper
	PinterestScraperClick.setModel(model);
}
