import type { Application, IPlugin } from "@phosphor/application";
import type { Widget } from "@phosphor/widgets";
import "./styles/index.css";
/**
 * The example plugin.
 */
declare const examplePlugin: IPlugin<Application<Widget>, void>;
export default examplePlugin;
