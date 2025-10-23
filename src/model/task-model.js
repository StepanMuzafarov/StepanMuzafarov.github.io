export class TaskModel {
  #boardTasks = [];

  constructor(tasks = []) {
    this.#boardTasks = [...tasks];
  }

  get tasks() {
    return [...this.#boardTasks];
  }

  addTask(task) {
    this.#boardTasks.push(task);
  }

  clear() {
    this.#boardTasks = [];
  }
}