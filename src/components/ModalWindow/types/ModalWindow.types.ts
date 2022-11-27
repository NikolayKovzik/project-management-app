import { ColumnPostBody, TaskCreateBody } from 'core/api/models';

type Props = {
  toggleModalWindow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteBoard?: () => void;
  deleteProfile?: () => void;
  createColumn?: (column: ColumnPostBody) => void;
  createTask?: (task: TaskCreateBody) => void;
  type?: string;
};

const TYPES = {
  DELETE: 'delete',
  CREATE: 'create',
  PROFILE: 'profile',
  DELETEPROFILE: 'deleteprofile',
  CREATECOLUMN: 'createcolumn',
  CREATETASK: 'createtask',
};

export { Props, TYPES };
