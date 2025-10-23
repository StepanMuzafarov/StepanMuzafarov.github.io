import { AbstractComponent } from '../framework/view/abstract-component.js';

export class NewTaskComponent extends AbstractComponent {
  #onAddTask = null;

  constructor({ onAddTask }) {
    super();
    this.#onAddTask = onAddTask;
  }

  get template() {
    return `
      <form class="new-task">
        <h2>Новая задача</h2>
        <input id="name-new-task" type="text" placeholder="Название задачи..." required>
        <button id="add-button" type="button">Добавить</button>
      </form>
    `;
  }

  setEventListeners() {
    const input = this.element.querySelector('#name-new-task');
    const button = this.element.querySelector('#add-button');

    const handleAdd = () => {
      const title = input.value.trim();
      if (title && this.#onAddTask) {
        this.#onAddTask(title);
        input.value = '';
        input.focus();
      }
    };

    button.addEventListener('click', handleAdd);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleAdd();
    });
  }
}