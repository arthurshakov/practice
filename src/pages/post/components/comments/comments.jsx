import { useState } from "react";
import { Icon } from "../../../../components";
import { Comment } from "./components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, selectUserRole } from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import { addCommentAsync } from "../../../../actions";
import { PROP_TYPE, ROLE } from "../../../../constants";
import PropTypes from "prop-types";

const CommentsLayout = ({className, comments, postId}) => {
  const [newComment, setNewComment] = useState('');
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const userRole = useSelector(selectUserRole);

  const onNewCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content));
    setNewComment('');
  };

  const isGuest = userRole === ROLE.GUEST;

  return (
    <div className={className}>
      {!isGuest && <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          placeholder="Комментарий..."
          onChange={({target}) => setNewComment(target.value)}
        ></textarea>
        <Icon id="paper-plane-o" margin="0 0 0 10px" fz="20px" onClick={() => onNewCommentAdd(userId, postId, newComment)} />
      </div>}
      <div className="comments">
        {
          comments.map(({id, author, content, publishedAt}) => (
            <Comment
              key={id}
              id={id}
              postId={postId}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))
        }
      </div>
    </div>
  );
}

export const Comments = styled(CommentsLayout)`
  width: 580px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  &,
  .comments {
    display: grid;
    grid-template-columns: 100%;
    gap: 20px;
  }

  .new-comment {
    display: flex;
  }

  textarea {
    width: 550px;
    min-height: 120px;
    padding: 5px 7px;
  }
`;

Comments.propTypes = {
  comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
  postId: PropTypes.string.isRequired,
}
