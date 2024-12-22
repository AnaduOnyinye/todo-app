import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export default function TodoItem({ todo, onComplete, onIncomplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    if (editedTitle.trim()) {
      onEdit(todo.id, { ...todo, title: editedTitle.trim() });
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={todo.completed ? onIncomplete : onComplete}
          className="h-4 w-4"
          aria-label={`Mark todo ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        {isEditing ? (
          <div className="flex gap-2 flex-1">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="flex-1 px-2 py-1 border rounded"
              autoFocus
              onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            />
            <Button size="sm" onClick={handleEdit}>Save</Button>
            <Button 
              size="sm" 
              onClick={() => {
                setIsEditing(false);
                setEditedTitle(todo.title);
              }}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Link to={`/todo/${todo.id}`} className="flex-1">
            <span className="text-gray-800">{todo.title}</span>
          </Link>
        )}
      </div>
      {!isEditing && (
        <div className="flex gap-2 ml-4">
          <Button size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
          <Link to={`/todo/${todo.id}`}>
            <Button size="sm">View</Button>
          </Link>
          <Button
            size="sm"
            onClick={() => onDelete(todo.id)}
            className="bg-red-600 hover:bg-red-700"
            aria-label="Delete todo"
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}