import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Widget } from '@lumino/widgets';
import { LabIcon, jupyterFaviconIcon } from '@jupyterlab/ui-components';
import msetSvgstr from './../style/images/mset.svg';
import '../style/base.css';

/**
 * Initialization data for the jupyter_mset_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_mset_theme:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    // Logo in the top-left corner
    const msetIcon = new LabIcon({
      name: 'ui-components:mset',
      svgstr: msetSvgstr
    });
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
    const faviconLink =
      document.querySelector<HTMLLinkElement>("link[rel~='icon']") ??
      document.createElement('link');

    faviconLink.rel = 'icon';
    faviconLink.type = 'image/svg+xml';
    faviconLink.href = `data:image/svg+xml,${encodeURIComponent(msetSvgstr)}`;

    if (!faviconLink.parentElement) {
      document.head.appendChild(faviconLink);
    }
  }
};

export default plugin;
