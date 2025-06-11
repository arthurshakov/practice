import { useDispatch } from "react-redux";
import { Icon } from "../../../../../../components";
import styled from "styled-components";
import { useServerRequest } from "../../../../../../hooks";
import { openModal, CLOSE_MODAL, removeCommentAsync } from "../../../../../../actions";

const CommentLayout = ({className, id, postId, author, publishedAt, content}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

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

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="user-circle-o" fz="20px" inactive={true} /> {author}
          </div>
          <div className="published-at">
            <Icon id="calendar-o" fz="20px" margin="0 10px 0 0" inactive={true} /> {publishedAt}
          </div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      <Icon id="trash-o" margin="0 0 0 10px" onClick={() => onCommentRemove(id)} />
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
