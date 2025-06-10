import styled from "styled-components";
import { H1, Icon } from "../../../../components";

const PostContentLayout = ({
  className,
  post: {
    // id,
    title,
    imageUrl,
    content,
    publishedAt,
  },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl || ' '} alt={title} />
      <H1>{title}</H1>

      <div className="special-panel">
        <div className="published-at">
          <Icon id="calendar-o" margin="0 10px 0 0" fz="18px" /> {publishedAt}
        </div>
        <div className="buttons">
          <Icon id="pencil-square-o" margin="0 10px 0 0" fz="24px" onClick={() => console.log('clicked')} />
          <Icon id="trash-o" fz="24px" onClick={() => console.log('clicked')} />
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export const PostContent = styled(PostContentLayout)`
  img {
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .special-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .published-at,
  .buttons {
    display: flex;
    align-items: center;
  }

  .published-at {
    div {
      cursor: default;
    }
  }
`;
