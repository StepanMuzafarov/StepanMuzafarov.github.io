import TaskBoardComponent from '../view/task-board-component.js';
import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import { render } from '../framework/render.js';

export default class TasksBoardPresenter {
  constructor({ boardContainer, tasksModel }) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
    this.taskBoardComponent = new TaskBoardComponent();
  }

  init() {
    this.boardTasks = this.tasksModel.getTasks();
    this.#renderBoard();
  }

  #renderBoard() {
    render(this.taskBoardComponent, this.boardContainer);

    const boardElement = this.taskBoardComponent.getElement();
    const statuses = ['backlog', 'in-progress', 'ready', 'bin'];

    statuses.forEach(status => {
        const taskListComponent = new TaskListComponent(status);
        render(taskListComponent, boardElement);

        const tasksContainer = taskListComponent.getElement().querySelector(`.${status}-tasks`);
        const tasksForStatus = this.boardTasks.filter(task => task.status === status);

        tasksForStatus.forEach(task => {
            const taskComponent = new TaskComponent(task);
            render(taskComponent, tasksContainer);
        });

        if (status === 'bin') {
            const clearButtonComponent = new ClearButtonComponent();
            render(clearButtonComponent, taskListComponent.getElement());
        }
    });
  }
}