import React from "react";

const Mood = ({ mood }) => {
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
  const selectOptions = Object.entries(moodEmoji).filter(
    ([name, emoji]) => name === mood
  );

  //
  return (
    <div>
      Mood:&nbsp;{selectOptions[0][1]}&nbsp;{selectOptions[0][0]}
    </div>
  );
};

export default Mood;
