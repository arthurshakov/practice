import { getCommentsWithAuthor } from "../../utils";
import { getPost } from "../api";

export const fetchPost = async (postId) => {
  let post;
  let error = null;

  try {
    post = await getPost(postId);
  } catch(postError) {
    error = postError;
  }

  if (error) {
    return {
      error,
      res: null,
    }
  }

  return {
    error,
    res: {
      ...post,
      comments: await getCommentsWithAuthor(postId),
    },
  }
};
