import React, { ReactElement, useState } from 'react';

import styles from './EditProfile.module.scss';

const EditProfile = (): ReactElement => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const changeInputLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };
  const changeInputPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const saveProfile = (): void => {
    const profile = {
      name,
      login,
      password,
    };
    console.log(profile);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <p>Name</p>
        <input value={name} onChange={changeInputName} />
      </div>
      <div className={styles.inputContainer}>
        <p>Login</p>
        <input value={login} onChange={changeInputLogin} />
      </div>
      <div className={styles.inputContainer}>
        <p>Password</p>
        <input
          className={styles.password}
          type="password"
          value={password}
          onChange={changeInputPassword}
        />
      </div>
      <button className={styles.saveButton} type="button" onClick={saveProfile}>
        Save
      </button>
    </>
  );
};

export default EditProfile;
