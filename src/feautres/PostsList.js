import { useSelector } from "react-redux";
import { selectAllPosts } from "./post/postSlice";
import "./posts.css";

import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section id='posts-list'>
      <h2>My Blog</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
