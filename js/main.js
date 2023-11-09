import { Todo } from "./Todo.js";
const kanban = new Todo('#kanban', ['Backlog', 'Todo', 'In progress', 'Done']);

const addTaskBtnDOM = document.getElementById('add_task');
const asideDOM = document.getElementById('aside');
const asideBackgroundDOM = asideDOM.querySelector('.aside-bg');
const asideClodeBtnDOM = asideDOM.querySelector('.aside-header button');
asideDOM.classList.add('show');


if (addTaskBtnDOM && asideDOM) {
    addTaskBtnDOM.addEventListener('click', () => {
        asideDOM.classList.add('show');
    })
    
    asideBackgroundDOM.addEventListener('click', () => {
        asideDOM.classList.remove('show');
    })
    
    asideClodeBtnDOM.addEventListener('click', () => {
        asideDOM.classList.remove('show');
    })
    
    window.addEventListener('keyup', (event) => {
        if (event.key === 'Escape+') {
            asideDOM.classList.remove('show');
        }
    })
    window.addEventListener('keyup', (event) => {
        if (event.key === '+') {
            asideDOM.classList.add('show');
        }
    })
}

const formDOM = document.getElementById('task_form');
const formTitleDOM = document.getElementById('title')
const formDescDOM = document.getElementById('desc')
const formDeadlineDOM = document.getElementById('deadline')
const formTagsDOM = document.getElementById('tags')

if (formDOM) {
    formDOM.addEventListener('submit', (event) => {
        event.preventDefault();

        kanban.addTask({
            columnIndex: 0,
            title: formTitleDOM.value,
            desc: formDescDOM.value,
            createdOn: '2023-11-08 09:03:15',
            deadline: formDeadlineDOM.value,
            tags: formTagsDOM.value
                .split(',')
                .filter(txt => txt !=='')
                .map(txt => ({ text: txt.trim(), color: '#333' })),
            // tags:  ['aaa', 'bbb', 'ccc']
            // tags: [
            //     { text: 'Design', color: '#333' },
            // ],
        });
        formTitleDOM.value = '';
        formDescDOM.value = '';
        formDeadlineDOM.value = '';
        formTagsDOM.value = '';
    })
}


// kanban.addTask({
//     columnIndex: 0,
//     title: 'Antra uzduotis',
//     desc: 'Antros uzduoties pilnas aprasas... laaaabai issamiai nupasakoja ka reikia padaryti ;)',
//     createdOn: '2023-11-08 10:03:15',
//     deadline: '2023-12-24 00:00:00',
//     tags: [
//         { text: 'UX', color: '#f00' },
//         { text: 'UI', color: '#090' },
//     ],
// });

// kanban.addTask({
//     columnIndex: 0,
//     title: 'Trecia uzduotis',
//     desc: 'Trecios uzduoties pilnas aprasas :P',
//     createdOn: '2023-11-08 10:13:15',
//     deadline: '2023-12-20 00:00:00',
//     tags: [
//         { text: 'Development', color: '#00c' },
//     ],
// });

// console.log(kanban);