export const getCommentsCount = (comments, requestedPostId) => {
  const postComments = comments.filter(({postId}) => postId === requestedPostId);

  return postComments.length;
}
