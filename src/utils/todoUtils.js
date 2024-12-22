export const validateTodo = (todo) => {
  if (!todo.title?.trim()) {
    throw new Error('Todo title is required');
  }
  return true;
};

export const formatTodoDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const sortTodosByDate = (todos) => {
  if (!Array.isArray(todos)) return [];
  return [...todos].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
    const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
    return dateB - dateA;
  });
};