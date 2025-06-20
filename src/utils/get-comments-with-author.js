import { getComments, getUsers } from "../bff/api";

export const getCommentsWithAuthor = async (postId) => {
  const comments = await getComments(postId);
  const users = await getUsers();

  return comments.map((comment) => {
    const user = users.find(({id}) => id === comment.authorId );

    return {
      ...comment,
      author: user?.login,
    }
  });
}
