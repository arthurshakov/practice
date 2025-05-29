import { Button } from '../button/button';
import { Search, Sorting } from './components';
import { NEW_TODO_ID } from '../../constants';
import styles from './control-panel.module.css';
import { useDispatch } from 'react-redux';
import {addTemporaryTodo} from '../../actions';

export const ControlPanel = () => {
  const dispatch = useDispatch();

	const onTodoAdd = () => {
    dispatch(addTemporaryTodo({
      id: NEW_TODO_ID,
      title: '',
      completed: false,
    }));
	};

	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
