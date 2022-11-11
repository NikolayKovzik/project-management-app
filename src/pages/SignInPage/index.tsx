import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function SignInPage(): ReactElement {
  return (
    <>
      <h1>Register</h1>
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <Link to="singin" placeholder="i have acc" />
    </>
  );
}

export default SignInPage;
