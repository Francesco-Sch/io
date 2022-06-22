import type { Writable } from "svelte/store";
import type { DOMWidgetModel } from "@jupyter-widgets/base";
interface WidgetWritable<T> extends Writable<T> {
    setModel: (m: DOMWidgetModel) => void;
}
export declare function WidgetWritable<T>(name_: string, value_: T): WidgetWritable<T>;
export declare const value: WidgetWritable<number>;
export declare const ValidationStatus: WidgetWritable<string>;
export declare const ValidationMessage: WidgetWritable<string>;
export declare const CrawlerLoginUserName: WidgetWritable<string>;
export declare const CrawlerLoginPassword: WidgetWritable<string>;
export declare const CrawlerLinks: WidgetWritable<string[]>;
export declare const CrawlerOutputFolder: WidgetWritable<string>;
export declare const CrawlerImagesAmount: WidgetWritable<number>;
export declare const CrawlerInitClick: WidgetWritable<boolean>;
export declare const CrawlerGalleryFolder: WidgetWritable<string>;
export declare const TextToImagePrompt: WidgetWritable<string>;
export declare const TextToImageAttributes: WidgetWritable<object[]>;
export declare function setStoreModels(model: DOMWidgetModel): void;
export {};
