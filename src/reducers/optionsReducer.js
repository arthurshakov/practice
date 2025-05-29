const initialOptions = { isLoading: false };

export const optionsReducer = (state = initialOptions, { type, payload }) => {
  switch (type) {
    case 'READ_TODOS':
    case 'CHANGE_TODO':
    case 'CREATE_TODO':
    case 'DELETE_TODO':
      return { ...state, isLoading: false };

    case 'SET_LOADING_STATE':
      return { ...state, isLoading: payload };

    case 'SET_OPTIONS':
      return { ...state, ...payload };

    default:
      return state;
  }
};
