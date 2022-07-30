import { useDispatch } from "react-redux";
import { reactionAdded } from "./post/postSlice";
import React from "react";
import "../style.css";
import { updatePostReaction } from "../service/postSurvices";

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
    const reaction = post.reactions[name] ? 1 : 0;

    const addReaction = () => {
      updatePostReaction({ postId: post.id, reaction: name });
      dispatch(reactionAdded({ postId: post.id, reaction: name }));
    };

    return (
      <button
        key={name}
        type='button'
        className='reaction-button'
        onClick={addReaction}
      >
        {emoji}
        &nbsp;
        {reaction}
      </button>
    );
  });

  return <div className='reaction-buttons'>{reactionButtons}</div>;
};

export default ReactionButtons;
