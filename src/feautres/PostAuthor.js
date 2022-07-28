import { useSelector } from "react-redux";

import React from "react";

const PostAuthor = () => {
  const username = useSelector((state) => state.users.username);
  return <span>by {username}</span>;
};

export default PostAuthor;
