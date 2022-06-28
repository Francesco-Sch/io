import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/*
* Theme
*/
const theme: JupyterFrontEndPlugin<void> = {
  id: 'io:theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('IO-Theme is activated.');
    const style = 'IO-App/index.css'

    manager.register({
      name: 'IO-Theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    })
  }

}

/*
* Icon Set of IBM Carbon Design System.
*/ 
export * from './icons/icons';

/**
 * Initialization data for the IO-App extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'IO-App:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('IO-App is activated.');

    // Activate IO-Theme on extension start
    app.commands.execute('apputils:change-theme', {
      theme: 'IO-Theme'
    })
  }
};

/*
* Export all plugins
*/
const plugins: Array<JupyterFrontEndPlugin<any>> = [
  theme,
  plugin
]

export default plugins;