import { TaskListComponent } from '../view/task-list-component.js';
import { TaskComponent } from '../view/task-component.js';
import { ClearButtonComponent } from '../view/clear-button-component.js';
import { NoTasksComponent } from '../view/no-tasks-component.js';
import { render, clearElement } from '../framework/render.js';
import { generateID } from '../utils.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#tasksModel.addObserver(() => {
      this.init();
    });
  }

  init() {
    clearElement(this.#boardContainer);
    const statuses = ['backlog', 'in-progress', 'ready', 'bin'];

    statuses.forEach(status => {
      const taskListComponent = new TaskListComponent(status);
      render(taskListComponent, this.#boardContainer);

      const tasksContainer = taskListComponent.element.querySelector(`.${status}-tasks`);
      const tasksForStatus = this.#tasksModel.tasks.filter(task => task.status === status);

      this.#renderTasksList(tasksForStatus, tasksContainer);

      if (status === 'bin') {
        this.#renderClearButton(taskListComponent.element, tasksForStatus.length > 0);
      }
    });
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
  }

  #renderTasksList(tasks, container) {
    if (tasks.length === 0) {
      this.#renderNoTasks(container);
    } else {
      tasks.forEach(task => {
        this.#renderTask(task, container);
      });
    }
  }

  #renderClearButton(container, hasTasks) {
    const clearButtonComponent = new ClearButtonComponent();
    const button = clearButtonComponent.element;
    button.disabled = !hasTasks;
    button.addEventListener('click', () => {
      this.#tasksModel.clearBin();
    });
    render(clearButtonComponent, container);
  }

  #renderNoTasks(container) {
    const noTasksComponent = new NoTasksComponent();
    render(noTasksComponent, container);
  }

  handleAddTask(title) {
    const newTask = {
      id: generateID(),
      title: title.trim(),
      status: 'backlog'
    };
    this.#tasksModel.addTask(newTask);
  }
}