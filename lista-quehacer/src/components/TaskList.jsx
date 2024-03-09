import React from "react";

export const TaskList = ({ tasks, handleCompletedTask, handleDeleteTask }) => {
  return (
    <ul className="mt-8">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-slate-100 p-2 mb-2"
        >
          <span style={{ textDecoration: task.completed && "line-through" }}>
            {task.title}
          </span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCompletedTask(task.id)}
          />{" "}
          <button
            className="py-1 px-2 bg-red-400 hover:bg-red-600 rounded text-white font-semibold"
            onClick={() => handleDeleteTask(task.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};
