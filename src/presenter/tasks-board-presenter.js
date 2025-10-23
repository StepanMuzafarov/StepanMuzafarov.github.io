import { TaskBoardComponent } from '../view/task-board-component.js';
import { TaskListComponent } from '../view/task-list-component.js';
import { TaskComponent } from '../view/task-component.js';
import { ClearButtonComponent } from '../view/clear-button-component.js';
import { NoTasksComponent } from '../view/no-tasks-component.js';
import { render } from '../framework/render.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #taskBoardComponent = null;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#taskBoardComponent = new TaskBoardComponent();
  }

  init() {
    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#taskBoardComponent, this.#boardContainer);

    const boardElement = this.#taskBoardComponent.element;
    const statuses = ['backlog', 'in-progress', 'ready', 'bin'];

    statuses.forEach(status => {
      const taskListComponent = new TaskListComponent(status);
      render(taskListComponent, boardElement);

      const tasksContainer = taskListComponent.element.querySelector(`.${status}-tasks`);
      const tasksForStatus = this.#tasksModel.tasks.filter(task => task.status === status);

      this.#renderTasksList(tasksForStatus, tasksContainer);

      if (status === 'bin') {
        this.#renderClearButton(taskListComponent.element);
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

  #renderClearButton(container) {
    const clearButtonComponent = new ClearButtonComponent();
    render(clearButtonComponent, container);
  }

  #renderNoTasks(container) {
    const noTasksComponent = new NoTasksComponent();
    render(noTasksComponent, container);
  }
}