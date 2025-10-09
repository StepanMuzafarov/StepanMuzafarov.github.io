import HeaderComponent from './view/header-component.js';
import NewTaskComponent from './view/new-task-component.js';
import TaskBoardComponent from './view/task-board-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';
import {render, RenderPosition} from './framework/render.js';

const bodyContainer = document.querySelector('.todo-app');
const formSectionContainer = document.querySelector('.form-section');
const boardSectionContainer = document.querySelector('.board-section');

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

render(new NewTaskComponent(), formSectionContainer);

const taskBoardComponent = new TaskBoardComponent();
render(taskBoardComponent, boardSectionContainer);

const boardElement = taskBoardComponent.getElement();

for (let i = 0; i < 4; i++) {
    const taskListComponent = new TaskListComponent();
    render(taskListComponent, boardElement);

    const tasksContainer = taskListComponent.getElement().querySelector('.backlog-tasks');

    for (let j = 0; j < 3; j++) {
        const taskComponent = new TaskComponent();
        render(taskComponent, tasksContainer);
    }
}