import { useSelector } from "react-redux";
import { selectAllPosts } from "./post/postSlice";
import TimeAgo from "./TimeAgo";
import "../style.css";

import React from "react";
import Mood from "./Mood";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const email = useSelector((state) => state.users.email);

  const orderedPosts = posts
    .filter((post) => {
      console.log(post.email);
      console.log(email);
      return post.email === email;
    })
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <Mood mood={post.mood} />
      <p id='author'>
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  ));

  return (
    <section id='posts-list'>
      <h2>
        <span className='first-block'>My</span>
        <span className='second-block'>Diary</span>
        <span className='top-secret'>TOP SECRET</span>
      </h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
