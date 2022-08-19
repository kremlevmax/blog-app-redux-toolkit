import { useSelector } from "react-redux";

import React from "react";

const PostAuthor = () => {
  const email = useSelector((state) => state.users.email);
  return <span>by {email}</span>;
};

export default PostAuthor;
