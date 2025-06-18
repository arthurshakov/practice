import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { useState, useEffect, useMemo } from "react";
import { PostCard, Pagination, Search } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
import { getLastPageFromLinks, debounce } from "./utils";

const MainLayout = ({className}) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts', searchQuery, page, PAGINATION_LIMIT)
      .then(({res: {posts, links}}) => {
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      })
    ;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestServer, page, shouldSearch]);

  const startDebouncedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({target}) => {
    setSearchQuery(target.value);
    startDebouncedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <Search onChange={onSearch} searchQuery={searchQuery} />
      {
        posts.length ? (<div className="post-list">
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
        </div>)

        :

        (<div className="no-posts-found">Статьи не найдены</div>)
      }
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

  .no-posts-found {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
`;
