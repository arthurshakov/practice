import { Icon } from "../../../../../../components";
import styled from "styled-components";

const CommentLayout = ({className, author, publishedAt, content}) => {
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="user-circle-o" fz="20px" /> {author}
          </div>
          <div className="published-at">
            <Icon id="calendar-o" fz="20px" margin="0 10px 0 0" /> {publishedAt}
          </div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      <Icon id="trash-o" margin="0 0 0 10px" />
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
