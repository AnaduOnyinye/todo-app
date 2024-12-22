import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';
import { useTodoMutations } from '../../hooks/useTodoMutations';
import { useToast } from '../../hooks/useToast';
import { Button } from '../ui/Button';

export default function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast, showToast } = useToast();
  
  const { data: todo, isLoading, error } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => api.getTodoById(id)
  });

  const { updateTodo, deleteTodo } = useTodoMutations();

  const handleToggleComplete = async () => {
    try {
      await updateTodo.mutateAsync({
        id,
        todo: { ...todo, completed: !todo.completed }
      });
      showToast('Todo status updated successfully');
    } catch (error) {
      showToast('Failed to update todo status', 'error');
      console.error('Failed to update todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo.mutateAsync(id);
      showToast('Todo deleted successfully');
      // Only navigate after successful deletion
      setTimeout(() => navigate('/todos'), 1500);
    } catch (error) {
      showToast('Failed to delete todo', 'error');
      console.error('Failed to delete todo:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !todo) {
    return (
      <div className="text-center text-red-600">
        Error loading todo. Please try again.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Todo Details</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <p className="text-lg text-gray-900 p-2 bg-gray-50 rounded-md">{todo.title}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            todo.completed 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleToggleComplete}
            className={todo.completed 
              ? 'bg-yellow-500 hover:bg-yellow-600' 
              : 'bg-green-500 hover:bg-green-600'
            }
          >
            Mark as {todo.completed ? 'Incomplete' : 'Complete'}
          </Button>
          
          <Button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600"
          >
            Delete
          </Button>
          
          <Button
            onClick={() => navigate('/todos')}
            className="bg-gray-500 hover:bg-gray-600"
          >
            Back to List
          </Button>
        </div>
      </div>
    </div>
  );
}