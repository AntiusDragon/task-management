import { Todo } from "./Todo.js";

const kanban = new Todo(
    '#kanban', 
    ['Backlog', 'Todo', 'In Proigress', 'Done']
);
// const kanban = new Todo(5, ['backlog', 'Todo', 'In Proigress', 'Done']);

console.log(kanban);