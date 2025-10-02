import { SubTasksInputProps } from "../types";

const SubtasksInput = ({
  subtasksInput,
  setSubtasksInput,
}: SubTasksInputProps) => {
  return (
    <input
      value={subtasksInput}
      placeholder="Subtask title"
      onChange={(event) => setSubtasksInput(event.target.value)}
    />
  );
};

export default SubtasksInput;
