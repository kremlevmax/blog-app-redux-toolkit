import React from "react";
import { logOut } from "../service/userServices";

const Logout = () => {
  const logout = () => {
    logOut();
  };

  return <div>Logout</div>;
};

export default Logout;
