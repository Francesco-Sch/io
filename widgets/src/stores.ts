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
// Crawler Login
// ----------------
export const CrawlerLoginUserName = WidgetWritable<string>(
	"CrawlerLoginUserName",
	"Enter your username"
);
export const CrawlerLoginPassword = WidgetWritable<string>(
	"CrawlerLoginPassword",
	"Enter your password"
);

// ----------------
// Crawler Links
// ----------------
export const CrawlerLinks = WidgetWritable<Array<string>>("CrawlerLinks", []);
export const CrawlerOutputFolder = WidgetWritable<string>(
	"CrawlerOutputFolder",
	""
);
export const CrawlerImagesAmount = WidgetWritable<number>(
	"CrawlerImagesAmount",
	0
);

// ----------------
// Crawler Init
// ----------------
export const CrawlerInitClick = WidgetWritable<boolean>(
	"CrawlerInitClick",
	false
);

// Set the model for each store you create.
export function setStoreModels(model: DOMWidgetModel): void {
	// Example Widget
	value.setModel(model);

	// Crawler Login
	CrawlerLoginUserName.setModel(model);
	CrawlerLoginPassword.setModel(model);

	// Crawler Links
	CrawlerLinks.setModel(model);
	CrawlerOutputFolder.setModel(model);
	CrawlerImagesAmount.setModel(model);

	// Crawler Init
	CrawlerInitClick.setModel(model);
}
