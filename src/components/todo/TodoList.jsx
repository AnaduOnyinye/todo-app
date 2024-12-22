import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { useTodoMutations } from '../../hooks/useTodoMutations';
import { useToast } from '../../hooks/useToast';
import { PlusCircle, ListX } from 'lucide-react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { TodoFilters } from './TodoFilters';
import { TodoPagination } from './TodoPagination';
import { filterTodos } from '../../utils/todoFilters';
import { sortTodosByDate } from '../../utils/todoUtils';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { Toast } from '../ui/Toast';
import { Button } from '../ui/Button';

export default function TodoList() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompleted, setShowCompleted] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { toast, showToast, hideToast } = useToast();
  
  const { todos = [], totalTodos, isLoading, error } = useTodos(page);
  const { updateTodo, deleteTodo } = useTodoMutations();

  const sortedTodos = sortTodosByDate(todos);
  const filteredTodos = filterTodos(sortedTodos, { searchTerm, showCompleted });

  const handleDelete = async (id) => {
    try {
      await deleteTodo.mutateAsync(id);
      showToast('Todo deleted successfully');
    } catch (error) {
      showToast('Failed to delete todo', 'error');
    }
  };

  const handleEdit = async (id, updates) => {
    try {
      await updateTodo.mutateAsync({ id, todo: updates });
      showToast('Todo updated successfully');
    } catch (error) {
      showToast('Failed to update todo', 'error');
    }
  };

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center text-red-600">
        <p className="font-medium">Error loading todos</p>
        <p className="text-sm mt-1">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Todos</h1>
              <p className="text-sm text-gray-500 mt-1">
                {totalTodos} total tasks
              </p>
            </div>
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2"
            >
              <PlusCircle className="h-5 w-5" />
              Add Todo
            </Button>
          </div>
          
          <div className="mt-6">
            <TodoFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              showCompleted={showCompleted}
              setShowCompleted={setShowCompleted}
            />
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <div key={todo.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <TodoItem
                  todo={todo}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <ListX className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">
                {searchTerm ? 'No todos match your search' : 'No todos yet'}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {searchTerm ? 'Try a different search term' : 'Add your first todo to get started'}
              </p>
            </div>
          )}
        </div>

        {filteredTodos.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <TodoPagination
              page={page}
              totalTodos={totalTodos}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>

      <TodoForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSuccess={() => {
          setIsFormOpen(false);
          showToast('Todo created successfully');
        }}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
}