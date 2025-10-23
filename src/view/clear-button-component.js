import { AbstractComponent } from '../framework/view/abstract-component.js';

export class ClearButtonComponent extends AbstractComponent {
  get template() {
    return `<button id="clear-button">⨉ Очистить</button>`;
  }
}
