import { Button } from '../button/button';
import { KEYBOARD, NEW_TODO_ID } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingState, setEditingState, updateTodo, deleteTodo, createTodo } from '../../actions';
import styles from './todo.module.css';

export const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const { id: editingTodoId, title: editingTodoTitle } = useSelector(state => state.editingTodo);
  const isEditing = id === editingTodoId;
  const isLoading = useSelector(state => state.options.isLoading);

  const onCompletedChange = ({ target: { checked } }) => {
    dispatch(setLoadingState(true));
    dispatch(updateTodo({ id, completed: checked }));
	};

  const onEdit = () => {
    dispatch(setEditingState({ id, title }));
	};

  const onTitleChange = ({ target }) => {
    dispatch(setEditingState({ title: target.value }));
	};

  const onRemove = () => {
    dispatch(setLoadingState(true));
    dispatch(deleteTodo(id));
	};

  const onNewTodoSave = () => {
    dispatch(deleteTodo(NEW_TODO_ID));

    if (editingTodoTitle.trim() !== '') {
      dispatch(createTodo({id: NEW_TODO_ID, title: editingTodoTitle, completed }));
    }
	};

  const onEditingTodoSave = () => {
		if (editingTodoTitle.trim() === '') {
			onRemove();

			return;
		}

    dispatch(updateTodo({ id, title: editingTodoTitle }));
  }

  const onSave = () => {
		dispatch(setLoadingState(true));

		if (id === NEW_TODO_ID) {
			onNewTodoSave();
		} else {
			onEditingTodoSave();
		}
	};

  const onTitleKeyDown = ({ key }) => {
		if (key === KEYBOARD.ENTER) {
			onSave();
		} else if (key === KEYBOARD.ESCAPE) {
			if (id === NEW_TODO_ID) {
        dispatch(setEditingState({ id: null }))
			} else {
        dispatch(setEditingState({ id: null }))
			}
		}
	};

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				disabled={isEditing || isLoading}
				checked={completed}
				onChange={onCompletedChange}
			/>

			<div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						autoFocus={true}
						disabled={isLoading}
						value={editingTodoTitle}
						onChange={onTitleChange}
						onKeyDown={onTitleKeyDown}
					/>
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>✎</Button>
				) : (
					<Button onClick={onRemove}>✖</Button>
				)}
			</div>
		</div>
	);
};
