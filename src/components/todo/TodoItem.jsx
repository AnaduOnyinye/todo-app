import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoEditForm } from './TodoEditForm';
import { TodoActions } from './TodoActions';
import { ConfirmDialog } from '../ui/ConfirmDialog';

export default function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate();

  const handleEdit = async () => {
    if (editedTitle.trim() && editedTitle !== todo.title) {
      try {
        await onEdit(todo.id, { ...todo, title: editedTitle.trim() });
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to edit todo:', error);
      }
    } else {
      setIsEditing(false);
      setEditedTitle(todo.title);
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(todo.id);
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <>
      <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {isEditing ? (
              <TodoEditForm
                title={editedTitle}
                onTitleChange={setEditedTitle}
                onSave={handleEdit}
                onCancel={() => {
                  setIsEditing(false);
                  setEditedTitle(todo.title);
                }}
              />
            ) : (
              <div className="flex items-center gap-4">
                <TodoCheckbox
                  checked={todo.completed}
                  onChange={() => onEdit(todo.id, { ...todo, completed: !todo.completed })}
                />
                <span className={`flex-1 text-lg ${todo.completed ? 'text-gray-400' : 'text-gray-700'}`}>
                  {todo.title}
                </span>
              </div>
            )}
          </div>
          
          {!isEditing && (
            <TodoActions
              onEdit={() => setIsEditing(true)}
              onDelete={() => setShowDeleteConfirm(true)}
              onView={() => navigate(`/todos/${todo.id}`)}
            />
          )}
        </div>
      </div>

      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Todo"
        message="Are you sure you want to delete this todo? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  );
}