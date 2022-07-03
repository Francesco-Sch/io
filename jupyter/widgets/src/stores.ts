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
// Setup
// ----------------
export const SetupProcessing = WidgetWritable<boolean>("SetupProcessing", true);

// ----------------
// Validation
// ----------------
export const ValidationStatus = WidgetWritable<string>("ValidationStatus", "");
export const ValidationMessage = WidgetWritable<string>(
	"ValidationMessage",
	""
);

// ----------------
// Crawler Login
// ----------------
export const CrawlerLoginUserName = WidgetWritable<string>(
	"CrawlerLoginUserName",
	""
);
export const CrawlerLoginPassword = WidgetWritable<string>(
	"CrawlerLoginPassword",
	""
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
	NaN
);

// ----------------
// Crawler Init
// ----------------
export const CrawlerInitClick = WidgetWritable<boolean>(
	"CrawlerInitClick",
	false
);
export const CrawlerInitRunning = WidgetWritable<boolean>(
	"CrawlerInitRunning",
	false
);
export const CrawlerInitFinished = WidgetWritable<boolean>(
	"CrawlerInitFinished",
	false
);

// ----------------
// Crawler Gallery
// ----------------
export const CrawlerGalleryFolder = WidgetWritable<string>(
	"CrawlerGalleryFolder",
	""
);

// ----------------
// TextToImage Prompt
// ----------------
export const TextToImagePrompt = WidgetWritable<string>(
	"TextToImagePrompt",
	""
);
export const TextToImageAttributes = WidgetWritable<Array<object>>(
	"TextToImageAttributes",
	[]
);

// ----------------
// TextToImage Options
// ----------------
export const TextToImageOptionFolder = WidgetWritable<string>(
	"TextToImageOptionFolder",
	""
);
export const TextToImageOptionWidth = WidgetWritable<number>(
	"TextToImageOptionWidth",
	NaN
);
export const TextToImageOptionHeight = WidgetWritable<number>(
	"TextToImageOptionHeight",
	NaN
);
export const TextToImageOptionIterations = WidgetWritable<number>(
	"TextToImageOptionIterations",
	NaN
);

// ----------------
// TextToImage Init
// ----------------
export const TextToImageInitClick = WidgetWritable<boolean>(
	"TextToImageInitClick",
	false
);
export const TextToImageInitFolder = WidgetWritable<string>(
	"TextToImageInitFolder",
	""
);

// Set the model for each store you create.
export function setStoreModels(model: DOMWidgetModel): void {
	// Example Widget
	value.setModel(model);

	// Setup
	SetupProcessing.setModel(model);

	// Validation
	ValidationStatus.setModel(model);
	ValidationMessage.setModel(model);

	// Crawler Login
	CrawlerLoginUserName.setModel(model);
	CrawlerLoginPassword.setModel(model);

	// Crawler Links
	CrawlerLinks.setModel(model);
	CrawlerOutputFolder.setModel(model);
	CrawlerImagesAmount.setModel(model);

	// Crawler Init
	CrawlerInitClick.setModel(model);
	CrawlerInitRunning.setModel(model);
	CrawlerInitFinished.setModel(model);

	// Crawler Gallery
	CrawlerGalleryFolder.setModel(model);

	// TextToImage Prompt
	TextToImagePrompt.setModel(model);
	TextToImageAttributes.setModel(model);

	// TextToImage Options
	TextToImageOptionFolder.setModel(model);
	TextToImageOptionWidth.setModel(model);
	TextToImageOptionHeight.setModel(model);
	TextToImageOptionIterations.setModel(model);

	// TextToImage Init
	TextToImageInitClick.setModel(model);
	TextToImageInitFolder.setModel(model);
}
