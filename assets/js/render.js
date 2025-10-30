import {
  template_landingPage,
  template_taskManager,
  template_task,
} from "./template.js";
import { application } from "./static.js";
import {
  listener_addNewTask,
  listener_operationTaskFiltering,
  listener_removeTask,
  listener_toggleCompletionTask,
} from "./listener-manager.js";
import { storageManager_get } from "./storage-manager.js";

/**
 * @description This function implements the HTML content of the landing page
 * @returns {void}
 */
export function render_landingPage() {
  // 1) HTML DOM
  document.body.innerHTML = template_landingPage();

  // 2) Set the title
  document.title = application.name;

  // 3) Set the styles
  const elementStyle = document.createElement("link");
  elementStyle.rel = "stylesheet";
  elementStyle.id = application.css.id;
  elementStyle.href = application.css.path;
  document.head.appendChild(elementStyle);

  // 4) Active the listeners
  document
    .getElementById(application.button.start["btn-start-taskManager"])
    .addEventListener("click", render_taskManager);
}

/**
 * @description This function implements the HTML content of the task manager application
 * @returns {void}
 */
export function render_taskManager() {
  // 1) HTML DOM
  document.body.innerHTML = template_taskManager();

  // 2) Set the styles
  document
    .getElementById(application.css.id)
    .setAttribute("href", application.taskManager.css.path);

  // 3) Display available tasks
  render_tasks();

  // 4) Active the listeners
  // A) Add new task
  document
    .getElementById(application.taskManager.id.button.addTask)
    .addEventListener("click", listener_addNewTask);
  // B) Remove - BTN
  let elements;
  elements = document.getElementsByClassName(
    application.taskManager.id.button.remove
  );
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", listener_removeTask);
  }
  // C) Completed - BTN
  elements = document.getElementsByClassName(
    application.taskManager.id.button.completed
  );
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", listener_toggleCompletionTask);
  }
  // D) Filters
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", listener_operationTaskFiltering);
  });
}

/**
 * @description This function implements the HTML content of the tasks
 * @returns {void}
 */
export function render_tasks() {
  // 1) Remove all old data
  const containerTaskList = document.getElementById(
    application.taskManager.id.ul.listOfTasks
  );
  containerTaskList.innerHTML = "";

  // 2) Get new data from local-storage
  const ls = storageManager_get(application.taskManager.db.name);

  // 3) Render tasks one-by-one
  ls.forEach((task) => {
    containerTaskList.innerHTML += template_task(task);
  });

  // 4) Set the listeners
  // A) Remove - BTN
  let elements;
  elements = document.getElementsByClassName(
    application.taskManager.id.button.remove
  );
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", listener_removeTask);
  }
  // B) Completed - BTN
  elements = document.getElementsByClassName(
    application.taskManager.id.button.completed
  );
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", listener_toggleCompletionTask);
  }
}
