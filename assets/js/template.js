import { application } from "./static.js";

/**
 * @description This function return HTML template of landing page
 * @returns {string}
 */
export function template_landingPage() {
  return `
        <header>
        <section><span>Cyber-tech</span></section>
        <section>
            <ul>
            <li><a href="#members">MEMBERS</a></li>
            <li><a href="#contactUs">CONTACT US</a></li>
            </ul>
        </section>
        </header>
        <main>
            <a id="${application.button.start["btn-start-taskManager"]}" href="#">Get Started</a>
        <div id="main1">
            <div id="title">To Do List</div>
        </div>
        <div id="main2">
            <p id="members">MEMBERS</p>
            <div>
            <div>
                <a href=""
                ><img id="Prayani" src="/assets/images/Prayani.jpg" alt=""
                /></a>
                <p>
                Pouria Rayani<br />ROLE: Front-end Developer.<br />TASK:
                UI/UX
                </p>
            </div>

            <div>
                <a href=""
                ><img id="Erayani" src="/assets/images/Erayani.jpg" alt=""
                /></a>
                <p>
                Elahe Rayani<br />ROLE: Front-end Developer.<br />TASK: HTML &
                CSS
                </p>
            </div>

            <div>
                <a href="https://github.com/Rezaslm0"
                ><img src="/assets/images/reza.jpg" alt=""
                /></a>
                <p>Reza Salimi<br />ROLE: Front-end Developer.<br />TASK:Java Script</p>
            </div>

            </div>
        </div>
        <div id="main3">
            <p id="contactUs">CONTACT US</p>
            <footer>
            <div id="contactBox">
                <div>
                <input placeholder="Full Name" type="text" />
                <input placeholder="E-mail" type="text" />
                </div>
                <div id="numbers">
                <a href="#">+989174006046</a>
                <a href="#">+989109111088</a>
                <a href="#">+989385514036</a>
                <a href="#">+98927097648</a>
                </div>

                <a id="submit" href="#">Submit</a>
            </div>
            </footer>
        </div>
        </main>
    `;
}

/**
 * @description This function return HTML template of taskManager
 * @returns {string}
 */
export function template_taskManager() {
  return `
        <div class="container">
            <!-- Task Input Section -->
            <div class="task-input-container">
                <h1>Add a Task</h1>
                <div class="task-input">
                    <input type="text" id="${application.taskManager.id.input.taskValue}" placeholder="Add a new task...">
                    <button id="${application.taskManager.id.button.addTask}" class="Taskbutton">Add Task</button>
                </div>
            </div>

            <!-- Task List Section -->
            <div class="task-list-container">
                <h2>Your Tasks</h2>
                <!-- Filter Section -->
                <div class="filters">
                    <button class="filter-btn active allBtn" data-filter="all">All</button>
                    <button class="filter-btn activeBtn" data-filter="active">Active</button>
                    <button class="filter-btn completedBtn" data-filter="completed">Completed</button>
                </div>
                <!-- Task List -->
                <ul id="${application.taskManager.id.ul.listOfTasks}">
                    <!-- Tasks will be dynamically added here -->
                </ul>
            </div>
        </div>

        <script type=""module src="./assets/js/main.js"></script>
    `;
}

/**
 * @description This function return HTML template of task
 * @returns {string}
 */
export function template_task(task) {
  return `
        <li class="task-item ${task.status ?? ""}" id="${task.id}">
            <span>${task.value}</span>
            <div class="task-buttons">
                <button class="${
                  application.taskManager.id.button.completed
                }">✔️</button>
                <button class="${
                  application.taskManager.id.button.remove
                }">❌</button>
            </div>
        </li>
    `;
}
