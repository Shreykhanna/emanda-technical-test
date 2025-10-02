export interface Task {
  id: number;
  title: string;
  parentId?: number;
  subtasks?: Task[];
}

export type ButtonProps = {
  addSubtasks: (tasksInput: string, parentId: number) => void;
  task: Task[];
  tasksInput: string;
  setSubtasksInput: () => void;
  label: string;
};

export type SubTasksInputProps = {
  subtasksInput: string;
  setSubtasksInput: () => void;
};
