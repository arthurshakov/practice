import { transformComment } from "../../transformers";

export const getComments = (postId) =>
  fetch(`http://localhost:3005/comments/?post_id=${postId}`)
    .then(rawComments => rawComments.json())
    .then(loadedComments => loadedComments && loadedComments.map(comment => transformComment(comment)))
  ;
