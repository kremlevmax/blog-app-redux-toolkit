import React, { useState } from "react";
import "../style.css";
import { createUserWithUsernameAndPassword } from "../feautres/users/userSlice";
import { useDispatch } from "react-redux";

const LoginPopup = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const dispatch = useDispatch();

  const onUsernameChanged = (event) => setUsername(event.target.value);
  const onUPasswordChanged = (event) => setPassword(event.target.value);
  const onUPasswordRepeatChanged = (event) =>
    setPasswordRepeat(event.target.value);

  return (
    <div className='popup-background'>
      <div className='popup'>
        {hasAccount ? (
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
              type='text'
              id='password'
              name='password'
              value={password}
              onChange={onUPasswordChanged}
            />
            <button
              type='button'
              onClick={() =>
                dispatch(createUserWithUsernameAndPassword(username, password))
              }
            >
              Login{" "}
            </button>
            <span onClick={() => setHasAccount(!hasAccount)}>
              Don't have an account?
            </span>
          </form>
        ) : (
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
              type='text'
              id='password'
              name='password'
              value={password}
              onChange={onUPasswordChanged}
            />
            <label htmlFor='postTitle'>Repeat password:</label>
            <input
              type='text'
              id='password-repeat'
              name='password-repeat'
              value={passwordRepeat}
              onChange={onUPasswordRepeatChanged}
            />
            <button type='button'>Join</button>
            <span onClick={() => setHasAccount(!hasAccount)}>
              Already have an account?
            </span>
          </form>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default LoginPopup;
