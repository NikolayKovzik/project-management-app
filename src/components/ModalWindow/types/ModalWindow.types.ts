import { ColumnPostBody, Task } from 'core/api/models';

type Props = {
  toggleModalWindow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteBoard?: () => void;
  deleteProfile?: () => void;
  deleteCurrentColumn?: () => void;
  deleteCurrentTask?: () => void;
  createColumn?: (column: ColumnPostBody) => void;
  createTask?: (task: Task) => void;
  type?: string;
};

const TYPES = {
  DELETE: 'delete',
  CREATE: 'create',
  PROFILE: 'profile',
  DELETEPROFILE: 'deleteprofile',
  DELETECOLUMN: 'deletecolumn',
  CREATECOLUMN: 'createcolumn',
  CREATETASK: 'createtask',
  DELETETASK: 'deletetask',
};

export { Props, TYPES };
