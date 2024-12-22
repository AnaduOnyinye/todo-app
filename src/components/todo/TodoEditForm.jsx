import { Button } from '../ui/Button';

export function TodoEditForm({ title, onTitleChange, onSave, onCancel }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSave();
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
      <Button 
        onClick={onSave} 
        className="bg-green-500 hover:bg-green-600"
      >
        Save
      </Button>
      <Button 
        onClick={onCancel}
        className="bg-gray-500 hover:bg-gray-600"
      >
        Cancel
      </Button>
    </div>
  );
}