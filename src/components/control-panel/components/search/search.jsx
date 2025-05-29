import { useRef } from 'react';
import { debounce } from './utils';
import styles from './search.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setOptions } from '../../../../actions';

export const Search = () => {
	const dispatch = useDispatch();
  const { isAlphabetSorting, searchInput } = useSelector(state => state.options);

	const runSearch = (phrase, sorting) => {
    dispatch(setOptions({
      searchInput: phrase,
      searchPhrase: phrase,
      isAlphabetSorting: sorting,
    }))
	};

	const debouncedRunSearch = useRef(debounce(runSearch, 1500)).current;

	const onChange = ({ target }) => {
    dispatch(setOptions({searchInput: target.value}));
		debouncedRunSearch(target.value, isAlphabetSorting);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		runSearch(searchInput);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={searchInput}
				placeholder="Поиск..."
				onChange={onChange}
			/>
		</form>
	);
};
