import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { editingTodoReducer } from './editingTodoReducer';
import { optionsReducer } from './optionsReducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  editingTodo: editingTodoReducer,
  options: optionsReducer
});
