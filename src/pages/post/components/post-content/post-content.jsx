import styled from "styled-components";
import { H1, Icon } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useNavigate } from "react-router-dom";
import { PROP_TYPE } from "../../../../constants";

const PostContentLayout = ({
  className,
  post: {
    id,
    title,
    imageUrl,
    content,
    publishedAt,
  },
}) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <img src={imageUrl || ' '} alt={title} />
      <H1>{title}</H1>

      <SpecialPanel id={id} publishedAt={publishedAt} editButton={
        <Icon
          id="pencil-square-o"
          fz="24px"
          onClick={() => navigate(`/post/${id}/edit`)}
        />
      } />

      <div className="content">{content}</div>
    </div>
  );
}

export const PostContent = styled(PostContentLayout)`
  img {
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
    width: 280px;
    height: 150px;
  }

  .content {
    white-space: pre-line;
  }
`;

PostContent.propTypes = {
  post: PROP_TYPE.POST.isRequired,
}
