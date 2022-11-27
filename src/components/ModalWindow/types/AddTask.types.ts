import { Task } from 'core/api/models';

export type Props = {
  toggleModalWindow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  createTask?: (column: Task) => void;
};
