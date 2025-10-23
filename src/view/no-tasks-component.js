import { AbstractComponent } from '../framework/view/abstract-component.js';

export class NoTasksComponent extends AbstractComponent {
  get template() {
    return `<p class="no-tasks">Нет задач</p>`;
  }
}