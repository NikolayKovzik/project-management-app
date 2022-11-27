import { ColumnPostBody } from 'core/api/models';

export type Props = {
  toggleModalWindow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  createColumn?: (column: ColumnPostBody) => void;
};
