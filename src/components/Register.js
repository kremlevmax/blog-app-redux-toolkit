import React, { useState } from "react";
import { createAccount } from "../service/userServices";

const Register = ({ hasAccount, setHasAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onUsernameChanged = (event) => setUsername(event.target.value);
  const onUPasswordChanged = (event) => setPassword(event.target.value);
  const onUPasswordRepeatChanged = (event) =>
    setPasswordRepeat(event.target.value);

  const registerUser = () => {
    if (password === passwordRepeat) {
      createAccount(username, password);
      setUsername("");
      setPassword("");
      setPasswordRepeat("");
    } else {
      setPassword("");
      setPasswordRepeat("");
    }
  };

  return (
    <form action=''>
      <label htmlFor='postTitle'>Username:</label>
      <input
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={onUsernameChanged}
      />
      <label htmlFor='postTitle'>Password:</label>
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={onUPasswordChanged}
      />
      <label htmlFor='postTitle'>Repeat password:</label>
      <input
        type='password'
        id='password-repeat'
        name='password-repeat'
        value={passwordRepeat}
        onChange={onUPasswordRepeatChanged}
      />
      <button type='button' onClick={registerUser}>
        Join
      </button>
      <span onClick={() => setHasAccount(!hasAccount)}>
        Already have an account?
      </span>
    </form>
  );
};

export default Register;
