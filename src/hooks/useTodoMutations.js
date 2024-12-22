import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';

export function useTodoMutations() {
  const queryClient = useQueryClient();

  const createTodo = useMutation({
    mutationFn: api.createTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData(['todos', 1], (old) => {
        if (!old) return { todos: [newTodo], totalTodos: 1 };
        return {
          todos: [newTodo, ...old.todos],
          totalTodos: old.totalTodos + 1
        };
      });
    }
  });

  const updateTodo = useMutation({
    mutationFn: ({ id, todo }) => api.updateTodo(id, todo),
    onSuccess: (updatedTodo) => {
      queryClient.invalidateQueries(['todos']);
      queryClient.invalidateQueries(['todo', updatedTodo.id]);
    }
  });

  const deleteTodo = useMutation({
    mutationFn: api.deleteTodo,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['todos', 1], (old) => {
        if (!old) return { todos: [], totalTodos: 0 };
        return {
          todos: old.todos.filter(todo => todo.id !== deletedId),
          totalTodos: old.totalTodos - 1
        };
      });
      queryClient.removeQueries(['todo', deletedId]);
    }
  });

  return {
    createTodo,
    updateTodo,
    deleteTodo
  };
}