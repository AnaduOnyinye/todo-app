import { useState } from 'react';
import { useTodoMutations } from '../../hooks/useTodoMutations';
import { Button } from '../ui/Button';
import * as Dialog from '@radix-ui/react-dialog';

export default function TodoForm({ isOpen, onClose, onSuccess }) {
  const [title, setTitle] = useState('');
  const { createTodo } = useTodoMutations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        await createTodo.mutateAsync({
          title: title.trim(),
          completed: false,
          userId: 1,
          createdAt: new Date().toISOString()
        });
        setTitle('');
        onSuccess?.();
      } catch (error) {
        console.error('Failed to create todo:', error);
      }
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md animate-slide-in">
          <Dialog.Title className="text-xl font-bold mb-4">Create New Todo</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter todo title"
                autoFocus
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={createTodo.isLoading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {createTodo.isLoading ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}