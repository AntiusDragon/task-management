export class Todo {
    constructor(selector, columns) {
        this.selector = selector;
        this.columns = columns;
        this.DOM = null;
        this.columnsDOM = [];
        this.tasks = [];
        this.lastUsedTaskId = 0;

        this.init();
    }

    init() {
        this.updateDOMelement();
        if (typeof err === 'string') {
            return console.error(err);
        }

        this.render();
    }

    updateDOMelement() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            throw new Error('Netinkamas selektorius');
        }
        this.DOM = document.querySelector(this.selector);
    }

    render() {
        // console.log('piesiu turini...');
        // console.log(this.columns);
        let HTML = '';

        for (const column of this.columns) {
            HTML += `
                <div class="column">
                    <h2 class="title">${column}</h2>
                    <ul class="task-list"></ul>
                </div>`;
        }

        this.DOM.classList.add('todo');
        this.DOM.innerHTML = HTML;
        this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`;

        this.columnsDOM = this.DOM.querySelectorAll('.task-list');
        console.log(this.columnsDOM);
    }

    addTask(task) {
        this.tasks.push({
            ...task,
            isDeleted: false,
        });
        const taskID = ++this.lastUsedTaskId;
        let tagsHTML = '';

        for (const tag of task.tags) {
            tagsHTML += `<div class="tag" style="color: ${tag.color};">${tag.text}</div>`;
        }
        // // console.log(task);
        const HTML = `
        <li id="task_${taskID} class="task-card">
            <div class="task-actions">
                <button class="fa fa-trash"></button>
            </div>
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.desc}</div>
            <div class="task-tag">${tagsHTML}</div>
            <div class="task-deadline">${task.deadline}</div>
         </li>`;
        // console.log(HTML);

        // Neprisimena kas buvo istrinta
        // this.columnsDOM[task.columnIndex].innerHTML += HTML;
        // Prisimena kas buvo istrinta
        this.columnsDOM[task.columnIndex].insertAdjacentHTML('beforeend', HTML) ;

        const taskDOM = document.getElementById(`task_${taskID}`);
        const deleteButtonDOM = taskDOM.querySelector('.fa-trash');
        console.log(deleteButtonDOM);
        deleteButtonDOM,addEventListener('click', () => {
            this.tasks[taskID - 1].isDeleted = true;
            taskDOM.remove();
            // console.log('delete:', taskID);
        });
    }
}