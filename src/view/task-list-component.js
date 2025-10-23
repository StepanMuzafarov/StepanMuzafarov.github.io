import { AbstractComponent } from '../framework/view/abstract-component.js';
import { StatusToTitleMap } from '../const.js';

export class TaskListComponent extends AbstractComponent {
  constructor(status) {
    super();
    this.status = status;
  }

  get template() {
    const title = StatusToTitleMap[this.status];
    return `
      <div class="${this.status}">
        <h3 class="${this.status}-head">${title}</h3>
        <ul class="${this.status}-tasks"></ul>
      </div>
    `;
  }
}
