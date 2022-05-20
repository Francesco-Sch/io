import type { Writable } from 'svelte/store';
import type { DOMWidgetModel } from '@jupyter-widgets/base';
interface WidgetWritable<T> extends Writable<T> {
    setModel: (m: DOMWidgetModel) => void;
}
export declare function WidgetWritable<T>(name_: string, value_: T): WidgetWritable<T>;
export declare const value: WidgetWritable<number>;
export declare function setStoreModels(model: DOMWidgetModel): void;
export {};
