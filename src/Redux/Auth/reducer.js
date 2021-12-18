import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCESS } from './actionTypes';

const initState = {
	loading: false,
	error: false,
	isAuth: true, // set for demo purpose
	token: 'fakeToken'
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_LOADING:
			return { ...state, loading: true, error: false };
		case LOGIN_SUCESS:
			return { ...state, loading: false, error: false, token: payload, isAuth: true };
		case LOGIN_ERROR:
			return { ...state, loading: false, error: true, isAuth: false };
		default:
			return { ...state };
	}
};

export default reducer;
