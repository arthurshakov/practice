import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { useState, useEffect } from "react";
import { PostCard, Pagination } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
import { getLastPageFromLinks } from "./utils";

const MainLayout = ({className}) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts', page, PAGINATION_LIMIT)
      .then(({res: {posts, links}}) => {
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      })
    ;
  }, [requestServer, page]);

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
      {
        lastPage > 1 && (
          <Pagination
          setPage={setPage}
          page={page}
          lastPage={lastPage}
          />
        )
      }

    </div>
  );
};

export const Main = styled(MainLayout)`
  display: grid;
  grid-template-columns: 100%;
  gap: 40px;
  padding: 40px 80px;

  .post-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;
