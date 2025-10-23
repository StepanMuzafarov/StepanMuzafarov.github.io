import { AbstractComponent } from '../framework/view/abstract-component.js';

export class NewTaskComponent extends AbstractComponent {
  get template() {
    return `
      <form class="new-task">
        <h2>Новая задача</h2>
        <input id="name-new-task" type="text" placeholder="Название задачи...">
        <button id="add-button">Добавить</button>
      </form>
    `;
  }
}
