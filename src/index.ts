import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Widget } from '@lumino/widgets';
import { LabIcon } from '@jupyterlab/ui-components';
import msetSvgstr from './../style/images/mset.svg';
import "../style/base.css"

/**
 * Initialization data for the jupyter_mset_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_mset_theme:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter_mset_theme is activated!');
    const msetIcon = new LabIcon({name: 'ui-components:mset', svgstr: msetSvgstr});
    const logo = new Widget();
    msetIcon.element({
        container: logo.node,
        display: 'block',
        elementPosition: 'center',
        margin: '2px 5px 2px 5px',
        height: 'auto',
        width: '20px'
    });
    logo.id = 'jp-MsetLogo';
    app.shell.add(logo, 'top', { rank: 0 });
  }
};

export default plugin;
