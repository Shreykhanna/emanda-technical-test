import { Task } from "../types";
import { ButtonProps } from "../types";
const Button = ({
  addSubtasks,
  task,
  tasksInput,
  setSubtasksInput,
  label,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        if (!tasksInput.trim()) return;
        addSubtasks(tasksInput, task.id);
        setSubtasksInput("");
      }}
    >
      {label}
    </button>
  );
};
export default Button;
