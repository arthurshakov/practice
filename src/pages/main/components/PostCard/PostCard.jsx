import { Link } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostCardLayout = ({className, id, title, imageUrl, publishedAt, commentsCount}) => {
  return (
    <Link to={`/post/${id}`} className={className}>
      <img src={imageUrl} alt={title} />
      <div className="post-card-footer">
        <h3>{title}</h3>
        <div className="post-card-info">
          <div className="published-at">
            <Icon
              id="calendar-o"
              fz="18px"
              inactive={true}
              /> {publishedAt}
          </div>
          <div className="comments-count">
            <Icon
              id="comment-o"
              fz="18px"
              inactive={true}
              /> {commentsCount}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PostCard = styled(PostCardLayout)`
  border: 1px solid black;

  img {
    display: block;
    width: 100%;
  }

  .post-card-footer {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    padding: 10px;
    width: 100%;
  }

  .post-card-info {
    display: flex;
    justify-content: space-between;
  }

  .published-at,
  .comments-count {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
};
