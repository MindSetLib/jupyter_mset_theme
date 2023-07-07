import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { LabIcon } from '@jupyterlab/ui-components';
import msetSvgstr from './../style/images/mset.svg';


/**
 * Initialization data for the jupyter_mset_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_mset_theme:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyter_mset_theme is activated!');
    const style = 'jupyter_mset_theme/index.css';

    const msetIcon = new LabIcon({name: 'ui-components:mset', svgstr: msetSvgstr});
    const widgets = app.shell.widgets('top');
    let widget = widgets.next();
    while (widget !== undefined) {
      if (widget.id === 'jp-MainLogo') {
        msetIcon.element({
          container: widget.node,
          justify: 'center',
          margin: '2px 5px 2px 5px',
          height: 'auto',
          width: '20px'
        });
        break;
      }
      widget = widgets.next();
    }

    manager.register({
      name: 'jupyter_mset_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
