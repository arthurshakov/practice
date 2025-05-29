import { Button } from '../../../button/button';
import styles from './sorting.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setOptions } from '../../../../actions';

export const Sorting = () => {
  const dispatch = useDispatch();
  const isAlphabetSorting = useSelector(state => state.options.isAlphabetSorting);

	const onChange = ({ target }) => {
    dispatch(setOptions({isAlphabetSorting: target.checked}));
	};

	return (
		<Button>
			<input
				className={styles.checkbox}
				id="sorting-button"
				type="checkbox"
				checked={isAlphabetSorting}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-button">
				A&darr;
			</label>
		</Button>
	);
};
