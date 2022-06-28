// import * as React from 'react';

// import { ReactWidget } from '@jupyterlab/apputils';

// import {
//   JupyterFrontEnd,
//   JupyterFrontEndPlugin
// } from '@jupyterlab/application';

// import {
//   INotebookTracker,
//   NotebookPanel,
//   NotebookActions
// } from '@jupyterlab/notebook';

// import { ICellHeader, Cell } from '@jupyterlab/cells';

// import { ReadonlyPartialJSONObject } from '@lumino/coreutils';

// import { CommandRegistry } from '@lumino/commands';

// import { IEditorServices } from '@jupyterlab/codeeditor';

// import { IThemeManager } from '@jupyterlab/apputils';

// // RUN CELL ------------------------------------------------------------------------------------------------------------
// /**
//  * The CSS classes added to the cell footer.
//  */
// const CELL_HEADER_CLASS = 'jp-CellHeader';
// const CELL_HEADER_DIV_CLASS = 'ccb-cellHeaderContainer';
// const CELL_HEADER_BUTTON_CLASS = 'ccb-cellHeaderBtn';

// function activateCommands(
//   app: JupyterFrontEnd,
//   tracker: INotebookTracker
// ): Promise<void> {
//   // tslint:disable-next-line:no-console
//   console.log('JupyterLab extension jupyterlab-cellcodebtn is activated!');

//   Promise.all([app.restored]).then(([params]) => {
//     const { commands, shell } = app;

//     function getCurrent(args: ReadonlyPartialJSONObject): NotebookPanel | null {
//       const widget = tracker.currentWidget;
//       const activate = args.activate !== false;

//       if (activate && widget) {
//         shell.activateById(widget.id);
//       }

//       return widget;
//     }

//     function isEnabled(): boolean {
//       return (
//         tracker.currentWidget !== null &&
//         tracker.currentWidget === app.shell.currentWidget
//       );
//     }

//     commands.addCommand('run-selected-codecell', {
//       label: 'Run Cell',
//       execute: args => {
//         const current = getCurrent(args);

//         if (current) {
//           const { context, content } = current;
//           NotebookActions.run(content, context.sessionContext);
//           // current.content.mode = 'edit';
//         }
//       },
//       isEnabled
//     });
//   });

//   return Promise.resolve();
// }

// /**
//  * Extend the default implementation of an `IContentFactory`.
//  */
// export class ContentFactoryWithHeaderButton extends NotebookPanel.ContentFactory {
//   constructor(
//     commands: CommandRegistry,
//     options?: Cell.ContentFactory.IOptions | undefined
//   ) {
//     super(options);
//     this.commands = commands;
//   }
//   /**
//    * Create a new cell header for the parent widget.
//    */
//   createCellHeader(): ICellHeader {
//     return new CellHeaderWithButton(this.commands);
//   }

//   private readonly commands: CommandRegistry;
// }

// /**
//  * Extend default implementation of a cell footer.
//  */
// export class CellHeaderWithButton extends ReactWidget implements ICellHeader {
//   /**
//    * Construct a new cell footer.
//    */
//   constructor(commands: CommandRegistry) {
//     super();
//     this.addClass(CELL_HEADER_CLASS);
//     this.commands = commands;
//   }

//   private readonly commands: CommandRegistry;

//   render() {
//     return (
//       <div className={CELL_HEADER_DIV_CLASS}>
//         <button
//           className={CELL_HEADER_BUTTON_CLASS}
//           onClick={event => {
//             this.commands.execute('run-selected-codecell');
//           }}
//         >
//           RUN CELL
//         </button>
//       </div>
//     );
//   }
// }

// /**
//  * The fooet button extension for the code cell.
//  */
// const footerButtonExtension: JupyterFrontEndPlugin<void> = {
//   id: 'jupyterlab-cellcodebtn',
//   autoStart: true,
//   activate: activateCommands,
//   requires: [INotebookTracker]
// };

// /**
//  * The notebook cell factory provider.
//  */
// const cellFactory: JupyterFrontEndPlugin<NotebookPanel.IContentFactory> = {
//   id: 'jupyterlab-cellcodebtn:factory',
//   provides: NotebookPanel.IContentFactory,
//   requires: [IEditorServices],
//   autoStart: true,
//   activate: (app: JupyterFrontEnd, editorServices: IEditorServices) => {
//     // tslint:disable-next-line:no-console
//     console.log(
//       'JupyterLab extension jupyterlab-cellcodebtn',
//       'overrides default nootbook content factory'
//     );

//     const { commands } = app;
//     const editorFactory = editorServices.factoryService.newInlineEditor;
//     return new ContentFactoryWithHeaderButton(commands, { editorFactory });
//   }
// };
