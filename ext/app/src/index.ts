import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

export * from './icons/icons';

/**
 * Initialization data for the IO-App extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'IO-App:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension IO-App is activated!');
  }
};

export default plugin;
