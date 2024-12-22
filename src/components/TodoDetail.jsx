import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { useTodoMutations } from '../hooks/useTodoMutations';
import { Button } from './ui/Button';

export default function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todo, isLoading, error } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => api.getTodoById(id)
  });

  const { updateTodo, markComplete, markIncomplete, deleteTodo } = useTodoMutations();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todo</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Todo Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <p className="mt-1 text-lg">{todo.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Status:</label>
          <span className={`px-2 py-1 rounded text-sm ${
            todo.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
        <div className="flex gap-4 mt-6">
          {todo.completed ? (
            <Button
              onClick={() => markIncomplete.mutate(todo.id)}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              Mark as Incomplete
            </Button>
          ) : (
            <Button
              onClick={() => markComplete.mutate(todo.id)}
              className="bg-green-600 hover:bg-green-700"
            >
              Mark as Complete
            </Button>
          )}
          <Button
            onClick={() => {
              deleteTodo.mutate(todo.id);
              navigate('/');
            }}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="bg-gray-500 hover:bg-gray-600"
          >
            Back to List
          </Button>
        </div>
      </div>
    </div>
  );
}