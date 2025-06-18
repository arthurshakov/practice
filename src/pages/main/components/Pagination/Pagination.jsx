import { Button } from "../../../../components";
import styled from "styled-components";

const PaginationLayout = ({className, page, setPage, lastPage}) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>В начало</Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Предыдущая</Button>
      <div className="current-page">Страница {page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>Следующая</Button>
      <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>В конец</Button>
    </div>
  );
}

export const Pagination = styled(PaginationLayout)`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;

  .current-page {
    display: inline-flex;
    flex-shrink: 0;
    width: 150px;
    font-weight: 600;
    justify-content: center;
  }
`;
