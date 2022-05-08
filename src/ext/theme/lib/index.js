import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @francesco_sch/IO-Theme extension.
 */
const extension = {
  id: '@francesco_sch/IO-Theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: () => {
    console.log('JupyterLab extension @francesco_sch/IO-Theme is activated!');
    const style = '@francesco_sch/IO-Theme/index.css';
    manager.register({
      name: 'IO Theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
