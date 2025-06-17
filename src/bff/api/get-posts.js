import { transformPost } from "../../transformers";

export const getPosts = () =>
  fetch('http://localhost:3005/posts')
    .then(rawPosts => rawPosts.json())
    .then(loadedPosts => loadedPosts && loadedPosts.map(post => transformPost(post)))
  ;
