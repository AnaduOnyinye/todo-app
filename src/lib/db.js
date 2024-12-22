import Dexie from 'dexie';

export const db = new Dexie('todoDB');
db.version(1).stores({
  todos: '++id, title, completed, userId'
});

export const syncWithLocalStorage = async (todos) => {
  await db.todos.clear();
  await db.todos.bulkAdd(todos);
};

export const getTodos = () => db.todos.toArray();
export const addTodo = (todo) => db.todos.add(todo);
export const updateTodo = (id, todo) => db.todos.update(id, todo);
export const deleteTodo = (id) => db.todos.delete(id);