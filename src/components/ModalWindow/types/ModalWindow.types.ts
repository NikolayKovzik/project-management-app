type Props = {
  toggleModalWindow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteBoard?: () => void;
  deleteProfile?: () => void;
  type?: string;
};

const TYPES = {
  DELETE: 'delete',
  CREATE: 'create',
  PROFILE: 'profile',
  DELETEPROFILE: 'deleteprofile',
};

export { Props, TYPES };
