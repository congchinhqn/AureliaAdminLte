import { customElement, bindable, inject } from 'aurelia-framework';
import { IControl, WebApiServices } from '../../index';
import * as monaco from 'monaco-editor';

@inject(WebApiServices)
@customElement('monaco-editor')
export class MonacoEditorControl implements IControl {
  @bindable value: string = "";
  @bindable disabled: boolean = false;
  @bindable language: string = "typescript";

  //public event
  @bindable valueChangedEvent: Function= (_: any) => { };

  private static controlId: number = 1;
  private id: string = "";

  constructor(private webapi: WebApiServices) {
    this.id = `monaco${MonacoEditorControl.controlId++}`;
  }

  async attached() {
    if (this.value) {
      var content = await this.loadContentOfFilePath();
      monaco.editor.create(document.getElementById(this.id), {
        value: content,
        language: this.language,
      });
    }
  }

  private async loadContentOfFilePath() {
    if (this.value) {
      try {
        var response = await this.webapi.get(this.value);
        return response.content;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
}
