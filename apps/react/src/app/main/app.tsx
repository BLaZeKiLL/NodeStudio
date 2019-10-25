import React, {FunctionComponent} from 'react';
import { GraphEditor } from '@node-studio/vjs-editor';

import './app.scss';

export const App: FunctionComponent = () => {
  return (
    <GraphEditor editorID="graph-editor"></GraphEditor>
  );
};
