import { transformPost } from "../../transformers";

export const getPosts = (searchQuery, page, limit) =>
  fetch(`http://localhost:3005/posts?title_like=${searchQuery}&_page=${page}&_limit=${limit}`)
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
