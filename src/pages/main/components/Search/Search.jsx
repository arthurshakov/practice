import PropTypes from "prop-types";
import { Icon, Input } from "../../../../components";
import styled from "styled-components";

const SearchLayout = ({className, searchQuery, onChange, ...props}) => {
  return (
    <div className={className} {...props}>
      <Input value={searchQuery} className="search-input" onChange={onChange} placeholder="Поиск по заголовкам статей..." />

      <Icon
        id="search"
        fz="24px"
        margin="-4px 0 0 -30px"
        className="search-icon"
      />
    </div>
  );
};

export const Search = styled(SearchLayout)`
  display: flex;
  align-items: center;
  width: 340px;
  height: 40px;
  margin: 0 auto;

  .search-input {
    padding-right: 36px;
  }

  .search-icon {
    line-height: 1;
  }
`;

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
