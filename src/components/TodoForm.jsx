import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTodoMutations } from '../hooks/useTodoMutations';
import { Button } from './ui/Button';

export default function TodoForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const { createTodo } = useTodoMutations();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo.mutate({
      title,
      completed: false,
      userId: 1
    }, {
      onSuccess: () => {
        setIsOpen(false);
        setTitle('');
      }
    });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button>Add Todo</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">Create New Todo</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={createTodo.isLoading}>
                {createTodo.isLoading ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}