import { getPosts, getComments } from "../api";
import { getCommentsCount } from "../../utils";

export const fetchPosts = async (searchQuery, page, limit) => {
  const [{posts, links}, comments] = await Promise.all([getPosts(searchQuery, page, limit), getComments()]);

  return {
    error: null,
    res: {
      posts: posts.map(post => ({
        ...post,
        commentsCount: getCommentsCount(comments, post.id),
      })),
      links,
    },
  }
};
