import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Widget } from '@lumino/widgets';
import { LabIcon, jupyterFaviconIcon } from '@jupyterlab/ui-components';
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

    // Logo in the top-left corner
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

    // Logo loading jupyter
    jupyterFaviconIcon.svgstr = msetSvgstr;

    // Favicon logo
    const favicon = 'https://raw.githubusercontent.com/MindSetLib/jupyter_mset_theme/master/style/images/favicon.ico'
    let faviconLink = document.getElementsByClassName('idle favicon')[0];
    faviconLink.setAttribute('href', favicon);
  }
};

export default plugin;
