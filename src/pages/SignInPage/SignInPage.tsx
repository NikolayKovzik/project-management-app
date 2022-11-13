import React, { ReactElement } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function LoginPage(): ReactElement {
  const { state } = useLocation();
  const navigate = useNavigate();

  const prevLocation = state?.from || '';
  function handleSuccessSubmit(): void {
    // TODO redux global state isAuth = thue
    if (state.from) {
      navigate(state.from);
    } else navigate('/');
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <Link to="/signup">I haven`t account</Link>
    </div>
  );
}

export default LoginPage;
