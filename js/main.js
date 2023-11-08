import { Todo } from "./Todo.js";

const kanban = new Todo('#kanban', ['Backlog', 'Todo', 'In progress', 'Done']);

// const kanban = new Todo(5, ['backlog', 'Todo', 'In Proigress', 'Done']);

// console.log(kanban);

kanban.addTask({
    columnIndex: 1,
    title: 'Pirmos uzduoties atraste',
    desc: 'Pirmos uzduoties pilnas aprasas... laaaabai issamiai nupasakoja ka reikia padaryti ;)',
    createdOn: '2023-11-08 09:03:15',
    deadline: '2023-12-24 00:00:00',
    tags: [
        { text: 'Design', color: '#333' },
    ],
});

kanban.addTask({
    columnIndex: 0,
    title: 'Antra uzduotis',
    desc: 'Antros uzduoties pilnas aprasas... laaaabai issamiai nupasakoja ka reikia padaryti ;)',
    createdOn: '2023-11-08 10:03:15',
    deadline: '2023-12-24 00:00:00',
    tags: [
        { text: 'UX', color: '#f00' },
        { text: 'UI', color: '#090' },
    ],
});

kanban.addTask({
    columnIndex: 0,
    title: 'Trecia uzduotis',
    desc: 'Trecios uzduoties pilnas aprasas :P',
    createdOn: '2023-11-08 10:13:15',
    deadline: '2023-12-20 00:00:00',
    tags: [
        { text: 'Development', color: '#00c' },
    ],
});

console.log(kanban);