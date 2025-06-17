import { transformComment } from "../../transformers";

const COMMENTS_ENDPOINT = 'http://localhost:3005/comments/';

export const getComments = (postId) => {
  const url = postId === undefined ? COMMENTS_ENDPOINT : `${COMMENTS_ENDPOINT}?post_id=${postId}`;

  return fetch(url)
    .then(rawComments => rawComments.json())
    .then(loadedComments => loadedComments && loadedComments.map(comment => transformComment(comment)))
  ;
}
