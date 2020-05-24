import {ExelComponent} from "@core/ExelComponent";
import template from './template.js';

export class Table extends ExelComponent {
  static componentName = "excel__table";

  toHTML() {
    return template;
  }
}
