import { getCommentsWithAuthor } from "../../utils";
import { getPost, deleteComment } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: 'Доступ запрещён',
      res: null,
    }
  }

  await deleteComment(id);

  const post = await getPost(postId);
  // const comments = await getComments(postId);

  return {
    error: null,
    res: {
      ...post,
      comments: await getCommentsWithAuthor(postId),
    },
  };
};
