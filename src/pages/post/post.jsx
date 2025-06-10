import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostContent, Comments } from "./components";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

const PostLayout = ({className}) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id));
  }, [requestServer, dispatch, params.id]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />
    </div>
  )
}

export const Post = styled(PostLayout)`
  padding: 40px 80px;
`;
