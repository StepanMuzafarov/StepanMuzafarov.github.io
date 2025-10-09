import {createElement} from '../framework/render.js';
import { StatusToTitleMap } from '../const.js';

function createTaskListComponentTemplate(status) {
  const title = StatusToTitleMap[status];
  return `
    <div class="${status}">
      <h3 class="${status}-head">${title}</h3>
      <ul class="${status}-tasks"></ul>
    </div>
  `;
}

export default class TaskListComponent {
  constructor(status) {
    this.status = status;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.status);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}