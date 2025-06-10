import {setPostData} from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
  requestServer('savePost', newPostData)
    .then(updatedPost => {
      return dispatch(setPostData(updatedPost.res));
    })
;
