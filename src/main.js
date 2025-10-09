import HeaderComponent from './view/header-component.js';
import NewTaskComponent from './view/new-task-component.js';
import TaskModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import { tasks } from './mock/task.js';

const bodyContainer = document.querySelector('.todo-app');
const formSectionContainer = document.querySelector('.form-section');
const boardSectionContainer = document.querySelector('.board-section');

const tasksModel = new TaskModel(tasks);

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

render(new NewTaskComponent(), formSectionContainer);

const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: boardSectionContainer,
  tasksModel: tasksModel
});
tasksBoardPresenter.init();