const initialTodos = [];

export const todosReducer = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case 'READ_TODOS':
      return payload;

    case 'CHANGE_TODO':
      return state.map(item =>
        item.id === payload.id ? { ...item, ...payload } : item
      );

    case 'CREATE_TODO':
      return [payload, ...state];

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== payload);

    case 'ADD_TEMPORARY_TODO':
      return [payload, ...state];

    default:
      return state;
  }
};
