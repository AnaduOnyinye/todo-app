import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';

export function ConfirmDialog({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex justify-end gap-2">
            <Button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600"
            >
              {cancelText}
            </Button>
            <Button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="bg-red-500 hover:bg-red-600"
            >
              {confirmText}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}