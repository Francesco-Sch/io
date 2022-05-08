import { IThemeManager } from '@jupyterlab/apputils';
/**
 * Initialization data for the IO-Theme extension.
 */
const plugin = {
    id: 'IO-Theme:plugin',
    autoStart: true,
    requires: [IThemeManager],
    activate: (app, manager) => {
        console.log('JupyterLab extension IO-Theme is activated!');
        const style = 'IO-Theme/index.css';
        manager.register({
            name: 'IO-Theme',
            isLight: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    }
};
export default plugin;
