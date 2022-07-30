import React from "react";
import { setLoginStatus } from "../feautres/users/userSlice";
import { logOut } from "../service/userServices";
import "./Logout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const logout = () => {
    logOut();
    setLoginStatus({
      loginStatus: false,
      username: "",
      loading: false,
    });
  };

  return (
    <div className='logout__container'>
      <div className='logout__button' onClick={logout}>
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className='logout__icon'
        />
        Logout
      </div>
    </div>
  );
};

export default Logout;
