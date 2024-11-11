// src/components/ToDoItem.jsx
import { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleTaskCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 border rounded-md">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button onClick={handleSave} className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="w-4 h-4 text-blue-500"
          />
          <span className={`text-gray-700 ${task.completed ? 'line-through' : ''}`}>
            {task.text}
          </span>
        </div>
      )}

      {!isEditing && (
        <div className="flex items-center gap-2">
          <button onClick={handleEdit} className="px-2 py-1 text-sm text-blue-500 hover:underline">
            Edit
          </button>
          <button onClick={() => deleteTask(task.id)} className="px-2 py-1 text-sm text-red-500 hover:underline">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
