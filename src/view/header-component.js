import { AbstractComponent } from '../framework/view/abstract-component.js';

export class HeaderComponent extends AbstractComponent {
  get template() {
    return `
      <header>
        <h1 id="todo-list">Список задач</h1>
      </header>
    `;
  }
}
