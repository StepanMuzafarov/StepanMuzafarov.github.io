import {createElement} from '../framework/render.js';

function createTaskListComponentTemplate() {
    return `
        <div class="backlog">
            <h3 class="backlog-head">Бэклог</h3>
            <ul class="backlog-tasks"></ul>
        </div>
    `;
}

export default class TaskListComponent {
    getTemplate() {
        return createTaskListComponentTemplate();
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