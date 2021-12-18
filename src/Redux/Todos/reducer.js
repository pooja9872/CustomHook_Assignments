import { loadData, saveData } from '../../utils/localStorage';

import {
	ADD_TODO,
	ADD_TODO_LOADING,
	ADD_TODO_ERROR,
	GET_TODO_ERROR,
	GET_TODO_LOADING,
	GET_TODO_SUCCESS,
	CHANGE_TODO,
	DELETE_TODO,
	CHANGE_TODO_ERROR,
	CHANGE_TODO_LOADING
} from './actionTypes';

const initState = {
	loading: false,
	todos: loadData('todos') || [],
	error: false
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_TODO_SUCCESS:
			return { ...state, todos: [ ...payload ], loading: false, error: false };
		case GET_TODO_LOADING:
			return { ...state, loading: true, error: false };
		case GET_TODO_ERROR:
			return { ...state, error: true, loading: false };
		case ADD_TODO:
			const updatedTodos = [ ...state.todos, { ...payload } ];
			saveData('todos', updatedTodos);
			return { ...state, loading: false, error: false, todos: updatedTodos };
		case ADD_TODO_LOADING:
			return { ...state, loading: true, error: false };
		case ADD_TODO_ERROR:
			return { ...state, error: true, loading: false };
		case CHANGE_TODO_ERROR:
			return { ...state, error: true, loading: false };
		case CHANGE_TODO_LOADING:
			return { ...state, loading: true, error: false };
		case CHANGE_TODO:
			const todos = state.todos.map((item) => {
				if (item.id === payload.id) return { ...payload };
				else return item;
			});
			saveData('todos', todos);
			return { ...state, todos: [ ...todos ], error: false };
		case DELETE_TODO:
			saveData('todos', payload);
			return { ...state, todos: [ ...payload ], error: false };
		default:
			return { ...state };
	}
};

export default reducer;
