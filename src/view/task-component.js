import { AbstractComponent } from '../framework/view/abstract-component.js';

export class TaskComponent extends AbstractComponent {
  constructor(task) {
    super();
    this.task = task;
  }

  get template() {
    return `<li>${this.task.title}</li>`;
  }
}
