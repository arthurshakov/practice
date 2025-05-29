const fetchServer = (method, { id, ...payload } = {}) => {
  let url = `http://localhost:3003/todos`;
  let options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (method === 'GET') {
    const { searchPhrase, isAlphabetSorting } = payload;
    const sortingParams = isAlphabetSorting
      ? '_sort=title&_order=asc'
      : '_sort=id&_order=desc';
    url += `?${sortingParams}&title_like=${searchPhrase}`;
  } else {
    if (method !== 'POST') {
      url += `/${id}`;
    }

    if (method !== 'DELETE') {
      options.body = JSON.stringify(payload);
    }
  }

  return fetch(url, options).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => {
  return (dispatch) => {
    fetchServer('POST', newTodo)
      .then((resultTodo) => dispatch({type: 'CREATE_TODO', payload: resultTodo}));
  }
}

export const addTemporaryTodo = (todo) => ({
  type: 'ADD_TEMPORARY_TODO',
  payload: todo,
});

export const readTodos = (searchPhrase = '', isAlphabetSorting = false) => {
  return (dispatch) => {
    fetchServer('GET', { searchPhrase, isAlphabetSorting })
      .then(todos => dispatch({type: 'READ_TODOS', payload: todos}));
  }
}

export const setLoadingState = (isLoading = false) => ({
  type: 'SET_LOADING_STATE',
  payload: isLoading,
});

export const updateTodo = (todoData) => {
  return (dispatch) => fetchServer('PATCH', todoData)
    .then((todoItem) => dispatch({
      type: 'CHANGE_TODO',
      payload: todoItem,
    }))
  ;
};

export const setEditingState = (editingData) => ({
  type: 'SET_EDITING_STATE',
  payload: editingData,
});

export const setOptions = (options) => ({
  type: 'SET_OPTIONS',
  payload: options,
});

export const deleteTodo = (todoId) => {
  return (dispatch) => fetchServer('DELETE', {id: todoId})
    .then(() => {
      dispatch({
        type: 'DELETE_TODO',
        payload: todoId,
      })
    })
  ;
};
