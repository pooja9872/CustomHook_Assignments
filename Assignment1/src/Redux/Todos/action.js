import { nanoid } from 'nanoid';

import {
	ADD_TODO,
	ADD_TODO_ERROR,
	ADD_TODO_LOADING,
	CHANGE_TODO,
	DELETE_TODO,
	GET_TODO_ERROR,
	GET_TODO_LOADING,
	GET_TODO_SUCCESS
} from './actionTypes';

const getTodoSuccess = (payload) => {
	return { type: GET_TODO_SUCCESS, payload: [ ...payload ] };
};

const getTodoError = () => {
	return { type: GET_TODO_ERROR };
};

const getTodoLoading = () => {
	return { type: GET_TODO_LOADING };
};

const addTodo = (payload) => {
	return { type: ADD_TODO, payload: { id: nanoid(), status: false, title: payload } };
};

const addTodoLoading = () => {
	return { type: ADD_TODO_LOADING };
};

const addTodoError = () => {
	return { type: ADD_TODO_ERROR };
};

const changeTodo = (payload) => {
	return {type: CHANGE_TODO, payload: {...payload}}
}

const deleteTodo = (payload) => {
	return { type: DELETE_TODO, payload: [...payload] };
}

export { getTodoSuccess, getTodoLoading, getTodoError, addTodo, addTodoError, addTodoLoading, changeTodo, deleteTodo };

