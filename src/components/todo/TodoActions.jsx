import { Button } from '../ui/Button';

export function TodoActions({ onEdit, onDelete, onView }) {
  return (
    <div className="flex gap-2 ml-4">
      <Button 
        onClick={onEdit} 
        className="bg-blue-500 hover:bg-blue-600"
      >
        Edit
      </Button>
      <Button 
        onClick={onView}
        className="bg-purple-500 hover:bg-purple-600"
      >
        View
      </Button>
      <Button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600"
      >
        Delete
      </Button>
    </div>
  );
}