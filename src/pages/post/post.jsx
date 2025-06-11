import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostContent, Comments, PostForm } from "./components";
import styled from "styled-components";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";
import { selectPost } from "../../selectors";

const PostLayout = ({className}) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const isCreating = useMatch('/post');
  const isEditing = useMatch('/post/:id/edit');
  const requestServer = useServerRequest();

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id));
  }, [requestServer, dispatch, params.id, isCreating]);

  return (
    <div className={className}>
      {
        isCreating || isEditing ?
          <PostForm post={post} />
          :
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      }
    </div>
  )
}

export const Post = styled(PostLayout)`
  padding: 40px 80px;
`;
