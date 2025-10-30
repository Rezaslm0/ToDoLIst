import { storageManager_add, storageManager_remove, storageManager_toggleCompleted } from "./storage-manager.js";
import { idGenerator } from "./unique-identifier.js";
import { render_tasks } from "./render.js";
import { application } from "./static.js";

/**
 * @description This function managing process of add new task
 */
export function listener_addNewTask(){
    // 1) Get values from user inputs fields
    const tagInput = document.getElementById(application.taskManager.id.input.taskValue);

    // 3) Set up valid value to store in local-storage
    const task = {
        value: tagInput.value,
        status: null,
        id: idGenerator()
    }

    // 4) Store it in local-storage
    storageManager_add(application.taskManager.db.name, task)

    // 5) Show all data in html content
    render_tasks()

    // 6) Empty it
    tagInput.value = '';

}

/**
 * @description This function managing process of removing task
 */
export function listener_removeTask(e){
    // 1) Get Id of task
    const taskID = Number(e.target.parentNode.parentNode.id)

    // 2) Remove it from local-storage
    storageManager_remove(application.taskManager.db.name, Number(taskID))

    // 3) Remove it from html content
    render_tasks()

}

/**
 * @description This function managing process of task is completed
 */
export function listener_toggleCompletionTask(e){
    // 1) Get Id of task
    const taskElement = e.target.parentNode.parentNode

    // 2) Toggle class to change style
    taskElement.classList.toggle('completed');
    
    // 3) Toggle it in local-storage
    storageManager_toggleCompleted(application.taskManager.db.name, Number(taskElement.id))

}

/**
 * @description This function managing process of filtering task
 */
export function listener_operationTaskFiltering() {
    const filter = this.getAttribute('data-filter');
    const tasks = document.querySelectorAll('.task-item');
    
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'active':
                task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
            }
    });
    

    document.querySelectorAll('.filter-btn').forEach( function(btn){
        btn.classList.remove("active");
        
    })
    
    this.classList.add("active");
}