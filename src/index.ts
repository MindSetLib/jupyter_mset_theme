import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import "../style/index.css"

/**
 * Initialization data for the jupyter_mset_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_mset_theme:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter_mset_theme is activated!');
  }
};

export default plugin;
