import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./post/postSlice";
import "../style.css";
import { createPost } from "../service/postSurvices";

const AddPostForm = () => {
  const email = useSelector((state) => state.users.email);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("happy");

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onContentChanged = (event) => setContent(event.target.value);
  const onMoodChange = (event) => setMood(event.target.value);
  const canSave = Boolean(title) && Boolean(content);

  const onSavePostClicked = () => {
    if (canSave) {
      const id = nanoid();
      const date = new Date().toISOString();
      createPost(id, title, content, email, mood, date);

      dispatch(postAdded(id, title, content, email, mood, date));
      setTitle("");
      setContent("");
    }
  };

  const moodEmoji = {
    happy: "😃",
    sad: "😞",
    blessed: "😇",
    excited: "🚀",
    confused: "😟",
    tired: "😴",
    serious: "🤓",
    playful: "😜",
    sick: "🤢",
    surprised: "😳",
    angry: "😡",
  };

  const selectOptions = Object.entries(moodEmoji).map(([name, emoji]) => {
    return (
      <option value={name} key={name}>
        {emoji} {name}
      </option>
    );
  });

  return (
    <section id='post-form'>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Post Content:</label>
        <textarea
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor='postMood'>Mood:</label>
        <select name='postMood' id='postMood' onChange={onMoodChange}>
          {selectOptions}
        </select>
        <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
