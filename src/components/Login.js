import React, { useState } from "react";
import { loginToAccount } from "../service/userServices";

const Login = ({ hasAccount, setHasAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onUsernameChanged = (event) => setUsername(event.target.value);
  const onUPasswordChanged = (event) => setPassword(event.target.value);

  const loginButtonHandler = async () => {
    const result = await loginToAccount(username, password);

    if (result === "wrong-password") {
      setError("Wrong Password");
    } else {
      setUsername("");
      setPassword("");
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
      <p className='error'>{error}</p>
      <button type='button' onClick={loginButtonHandler}>
        Login
      </button>
      <span onClick={() => setHasAccount(!hasAccount)}>
        Don't have an account?
      </span>
    </form>
  );
};

export default Login;
