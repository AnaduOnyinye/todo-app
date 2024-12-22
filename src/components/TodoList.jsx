import { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { useTodoMutations } from '../hooks/useTodoMutations';
import { TodoFilters } from './todo/TodoFilters';
import { TodoPagination } from './todo/TodoPagination';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { filterTodos } from '../utils/todoFilters';

export default function TodoList() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompleted, setShowCompleted] = useState('all');
  
  const { todos, totalTodos, isLoading, error } = useTodos(page);
  const { markComplete, markIncomplete, deleteTodo, updateTodo } = useTodoMutations();

  const filteredTodos = filterTodos(todos, { searchTerm, showCompleted });

  const handleDelete = async (id) => {
    try {
      await deleteTodo.mutateAsync(id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const handleEdit = async (id, updates) => {
    try {
      await updateTodo.mutateAsync({ id, todo: updates });
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  if (error) return <div>Error loading todos</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <TodoForm />
      </div>

      <TodoFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-4">
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={() => markComplete.mutate(todo.id)}
              onIncomplete={() => markIncomplete.mutate(todo.id)}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      <TodoPagination
        page={page}
        totalTodos={totalTodos}
        onPageChange={setPage}
      />
    </div>
  );
}