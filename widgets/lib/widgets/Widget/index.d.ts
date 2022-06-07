import { DOMWidgetModel, DOMWidgetView, ISerializers } from "@jupyter-widgets/base";
export declare class SliderModel extends DOMWidgetModel {
    defaults(): any;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: any;
    static model_module_version: any;
    static view_name: string;
    static view_module: any;
    static view_module_version: any;
}
export declare class SliderView extends DOMWidgetView {
    render(): void;
}
