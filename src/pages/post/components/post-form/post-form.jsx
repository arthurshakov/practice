import { useRef } from "react";
import { Icon, Input } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import { sanitizeContent } from "./utils";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { savePostAsync } from "../../../../actions";
import { useNavigate } from "react-router";
import { useServerRequest } from '../../../../hooks';

const PostFormLayout = ({
  className,
  post: {
    id,
    title,
    imageUrl,
    content,
    publishedAt,
  },
}) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(savePostAsync(requestServer, {
      id,
      imageUrl: newImageUrl,
      title: newTitle,
      content: newContent,
    }))
      .then(() => navigate(`/post/${id}`))
    ;
  };

  return (
    <div className={className}>
      <Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение" />

      <Input ref={titleRef} defaultValue={title} placeholder="Заголовок" />

      <SpecialPanel publishedAt={publishedAt} editButton={
        <Icon id="floppy-o" margin="0 10px 0 0" fz="24px" onClick={() => onSave()} />
      } />

      <div
        contentEditable
        suppressContentEditableWarning
        className="content"
        ref={contentRef}
      >{content}</div>
    </div>
  );
}

export const PostForm = styled(PostFormLayout)`
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
