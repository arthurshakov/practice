import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../../../../components";
import styled from "styled-components";
import { useServerRequest } from "../../../../../../hooks";
import { openModal, CLOSE_MODAL, removeCommentAsync } from "../../../../../../actions";
import { ROLE } from "../../../../../../constants";
import { selectUserRole } from "../../../../../../selectors";

const CommentLayout = ({className, id, postId, author, publishedAt, content}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const userRole = useSelector(selectUserRole);

  const onCommentRemove = (id) => {
    dispatch(openModal({
      text: 'Удалить комментарий?',
      onConfirm: () => {
        dispatch(removeCommentAsync(requestServer, postId, id));
        dispatch(CLOSE_MODAL);
      },
      onCancel: () => dispatch(CLOSE_MODAL),
    }));
  };

  const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="user-circle-o" margin="0 5px 0 0" fz="20px" inactive={true} /> {author}
          </div>
          <div className="published-at">
            <Icon id="calendar-o" fz="20px" margin="0 10px 0 0" inactive={true} /> {publishedAt}
          </div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      {isAdminOrModerator && <Icon id="trash-o" margin="0 0 0 10px" onClick={() => onCommentRemove(id)} />}
    </div>
  );
}

export const Comment = styled(CommentLayout)`
  display: flex;

  .comment {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 7px;
    width: 550px;
  }

  .information-panel {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .author {
    display: flex;
    align-items: center;
  }

  .published-at {
    display: flex;
    align-items: center;
  }
`;
