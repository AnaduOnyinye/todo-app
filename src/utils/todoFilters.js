export const filterTodos = (todos, { searchTerm, showCompleted }) => {
  if (!Array.isArray(todos)) return [];
  
  return todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = showCompleted === 'all' 
      ? true 
      : showCompleted === 'completed' 
        ? todo.completed 
        : !todo.completed;
    
    return matchesSearch && matchesStatus;
  });
};