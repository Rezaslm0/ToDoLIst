/**
 * @description This variable containing all application static data
 */
export const application = {
    name: "Task Manager 📝",
    button:{
        start: {
            "btn-start-taskManager": "start-task-manger-button"

        }
    },
    css: {
        id: "application-style",
        path: "./assets/css/index.css"
        
    },
    taskManager: {
        css: {
            path: "./assets/css/main.css"

        },
        id:{
            input: {
                taskValue: "new-task"

            },
            button: {
                addTask: "add-task-btn",
                completed: "btn-done",
                remove: "btn-remove"

            },
            ul: {
                listOfTasks: "task-list"

            }
        },
        db: {
            name: "list-of-all-tasks"
            
        }
    }
}
