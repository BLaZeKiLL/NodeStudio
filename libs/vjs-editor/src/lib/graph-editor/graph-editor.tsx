import React, { Component } from 'react';
import { GraphEditorCore } from './graph-editor-core';

import './graph-editor.scss';

export interface GraphEditorProps {
  editorID: string
}

export interface GraphEditorState {}

export class GraphEditor extends Component<GraphEditorProps, GraphEditorState> {

  private editor: GraphEditorCore;

  componentDidMount() {
    this.editor = new GraphEditorCore(this.props.editorID);
  }

  render() {
    return(
      <div id={this.props.editorID}></div>
    );
  }

}
