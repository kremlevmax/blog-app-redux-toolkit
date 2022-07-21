import { useSelector } from "react-redux";
import { selectAllUsers } from "./users/userSlice";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  // const author = users.find((user) => user.id === userId);
  //  {author ? author.name : "Unknown Author"}
  return <span>by</span>;
};

export default PostAuthor;
