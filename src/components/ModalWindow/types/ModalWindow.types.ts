type Props = {
  toggleModalWindow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteBoard?: () => void;
  type?: string;
};

const TYPES = {
  DELETE: 'delete',
  CREATE: 'create',
  PROFILE: 'profile',
};

export { Props, TYPES };
