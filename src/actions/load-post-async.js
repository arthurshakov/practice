import { setPostData } from "./set-post-data";

export const loadPostAsync = (requestServer, id) => (dispatch) => (
  requestServer('fetchPost', id)
    .then(postData => dispatch(setPostData(postData.res)))
);
