import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export function useTodos(page = 1) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos', page],
    queryFn: async () => {
      const result = await api.getTodos(page);
      return {
        todos: result.todos,
        totalTodos: result.total
      };
    }
  });

  return {
    todos: data?.todos ?? [],
    totalTodos: data?.totalTodos ?? 0,
    isLoading,
    error
  };
}