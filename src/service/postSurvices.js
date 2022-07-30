import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const createPost = async (id, title, content, username, date) => {
  try {
    await setDoc(doc(db, "posts", id), {
      title,
      content,
      username,
      date,
      reactions: {
        thumbsUp: false,
        wow: false,
        heart: false,
        rocket: false,
        coffee: false,
        sad: false,
      },
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updatePostReaction = async ({ postId, reaction }) => {
  const postRef = doc(db, "posts", postId);
  const post = await getDoc(postRef);

  const emotionValue = post.data().reactions[reaction];

  await updateDoc(postRef, {
    reactions: {
      ...post.data().reactions,
      [reaction]: !emotionValue,
    },
  });
};
