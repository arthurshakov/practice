import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostContent, Comments, PostForm } from "./components";
import { Error, PrivateContent } from "../../components";
import styled from "styled-components";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";
import { selectPost } from "../../selectors";
import { ROLE } from "../../constants";

const PostLayout = ({className}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const isCreating = !!useMatch('/post');
  const isEditing = !!useMatch('/post/:id/edit');
  const requestServer = useServerRequest();

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id))
      .then(postData => {
        setError(postData.error)
        setIsLoading(false);
      })
    ;
  }, [requestServer, dispatch, params.id, isCreating]);

  if (isLoading) {
    return null;
  }

  const SpecificPostPage = () => {
    return isCreating || isEditing ?
      <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivateContent>
      :
      <div className={className}>
        <PostContent post={post} />
        <Comments comments={post.comments} postId={post.id} />
      </div>
  };

  return (
    error ? <Error errorMessage={error} /> : <SpecificPostPage />
  )
}

export const Post = styled(PostLayout)`
  padding: 40px 80px;
`;
