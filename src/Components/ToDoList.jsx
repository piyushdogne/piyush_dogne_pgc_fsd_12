// src/components/ToDoList.jsx
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleTaskCompletion, editTask }) {
  return (
    <div className="mt-4 space-y-2">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
