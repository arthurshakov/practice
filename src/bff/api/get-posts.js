import { transformPost } from "../../transformers";

export const getPosts = (page, limit) =>
  fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`)
    .then(rawPosts => {
      return Promise.all([
        rawPosts.json(),
        rawPosts.headers.get('Link'),
      ]);
    })
    .then(([loadedPosts, links]) => ({
      posts: loadedPosts && loadedPosts.map(post => transformPost(post)),
      links,
    }))
  ;
