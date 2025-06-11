import { useLayoutEffect, useRef, useState } from "react";
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
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
  const [titleValue, setTitleValue] = useState(title);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    setImageUrlValue(imageUrl);
    setTitleValue(title);
  }, [title, imageUrl]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(savePostAsync(requestServer, {
      id,
      imageUrl: imageUrlValue,
      title: titleValue,
      content: newContent,
    }))
      .then(({id}) => navigate(`/post/${id}`))
    ;
  };

  const onImageUrlChange = ({target}) => setImageUrlValue(target.value);
  const onTitleChange = ({target}) => setTitleValue(target.value);

  return (
    <div className={className}>
      <div className="grid">
        <Input value={imageUrlValue} onChange={onImageUrlChange} placeholder="Изображение..." />

        <Input value={titleValue} onChange={onTitleChange}  placeholder="Заголовок..." />
      </div>

      <SpecialPanel id={id} publishedAt={publishedAt} editButton={
        <Icon id="floppy-o" fz="24px" onClick={() => onSave()} />
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
    border: 1px solid black;
    border-radius: 5px;
    min-height: 80px;
  }
`;
