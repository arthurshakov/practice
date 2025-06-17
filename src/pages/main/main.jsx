import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { useState, useEffect } from "react";
import { PostCard } from "./components";

const MainLayout = ({className}) => {
  const requestServer = useServerRequest();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestServer('fetchPosts')
      .then((posts) => {
        setPosts(posts.res);
      })
    ;
  }, [requestServer]);

  return (
    <div className={className}>
      <div className="post-list">
        {
          posts.map(({id, title, imageUrl, publishedAt, commentsCount}) => (
            <PostCard
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            publishedAt={publishedAt}
            commentsCount={commentsCount}
            />
          ))
        }
      </div>
    </div>
  );
};

export const Main = styled(MainLayout)`
  padding: 40px 80px;

  .post-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;
