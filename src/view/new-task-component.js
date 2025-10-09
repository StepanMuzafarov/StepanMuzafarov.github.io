import {createElement} from '../framework/render.js'; 


function createNewTaskComponentTemplate() {
    return (
        `<form class="new-task">
            <h2>Новая задача</h2>
            <input id="name-new-task" type="text" placeholder="Название задачи...">
            <button id="add-button">Добавить</button>
        </form>`
      );
}


export default class NewTaskComponent {
  getTemplate() {
    return createNewTaskComponentTemplate();
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