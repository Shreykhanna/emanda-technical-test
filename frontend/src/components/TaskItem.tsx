import React, { useState } from "react";
import { Task } from "../types";
import { useTasks } from "../context/TaskContext";
import Button from "./Button";
import SubtasksInput from "./SubtasksInput";
export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const [showSubtasks, setShowSubtasks] = useState(true);
  const [subtasksInput, setSubtasksInput] = useState("");
  const { addSubtasks } = useTasks();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0.75rem",
        margin: "0.5rem 0",
        backgroundColor: task.parentId ? "#f9f9f9" : "#fff",
        marginLeft: task.parentId ? "2rem" : "0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <strong>{task.title}</strong>
          <div style={{ marginTop: "0.5rem" }}>
            <SubtasksInput
              subtasksInput={subtasksInput}
              setSubtasksInput={setSubtasksInput}
            />
            <Button
              addSubtasks={addSubtasks}
              task={task}
              tasksInput={subtasksInput}
              setSubtasksInput={setSubtasksInput}
              label={"Add Subtasks"}
            />
          </div>

          <div style={{ marginTop: "0.5rem" }}>
            {task.subtasks?.map((subtask) => (
              <TaskItem key={subtask.id} task={subtask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
