import React, { useState } from "react";
import "../style.css";
import Login from "./Login";
import Register from "./Register";

const LoginPopup = () => {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className='popup-background'>
      <div className='popup'>
        {hasAccount ? (
          <Login hasAccount={hasAccount} setHasAccount={setHasAccount} />
        ) : (
          <Register hasAccount={hasAccount} setHasAccount={setHasAccount} />
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
