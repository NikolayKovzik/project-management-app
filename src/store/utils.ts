import { TOKEN_LIFETIME } from 'core/rest/AuthApi';

function isExpiredToken(): boolean {
  const createdTime = localStorage.getItem('token-created');
  if (!createdTime) return false;
  const currentTime = new Date().getTime();
  if (+currentTime - +createdTime > TOKEN_LIFETIME) {
    return true;
  }
  return false;
}

export default isExpiredToken;
