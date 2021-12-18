import { LOGIN_ERROR, LOGIN_SUCESS, LOGIN_LOADING } from './actionTypes';

const loginError = () => {
	return { type: LOGIN_ERROR };
};

const loginSuccess = (payload) => {
	return { type: LOGIN_SUCESS, payload: payload };
};

const loginLoading = () => {
	return { type: LOGIN_LOADING };
};

export { loginError, loginSuccess, loginLoading };
