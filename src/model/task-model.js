export class TaskModel {
  #boardTasks = [];
  #observers = [];

  constructor(tasks = []) {
    this.#boardTasks = [...tasks];
  }

  get tasks() {
    return [...this.#boardTasks];
  }

  addTask(task) {
    this.#boardTasks.push(task);
    this.#notify();
  }

  clearBin() {
    this.#boardTasks = this.#boardTasks.filter(task => task.status !== 'bin');
    this.#notify();
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  #notify() {
    this.#observers.forEach(observer => observer());
  }
}