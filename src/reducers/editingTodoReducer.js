const initialEditingTodo = { id: null, title: '' };

export const editingTodoReducer = (state = initialEditingTodo, { type, payload }) => {
  switch (type) {
    case 'CHANGE_TODO':
    case 'CREATE_TODO':
      return { id: null, title: '' };

    case 'SET_EDITING_STATE':
    case 'ADD_TEMPORARY_TODO':
      return { ...state, ...payload };

    default:
      return state;
  }
};
