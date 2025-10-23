import { AbstractComponent } from '../framework/view/abstract-component.js';

export class TaskBoardComponent extends AbstractComponent {
  get template() {
    return `<section class="board"></section>`;
  }
}
