import { useDispatch } from "react-redux";
import { reactionAdded } from "./post/postSlice";
import React from "react";
import "../style.css";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
  sad: "😢",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className='reaction-button'
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        &nbsp;
        {[post.reactions[name]]}
      </button>
    );
  });

  return <div className='reaction-buttons'>{reactionButtons}</div>;
};

export default ReactionButtons;
