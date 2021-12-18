import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import todoReducer from './Todos/reducer';
import authReducer from './Auth/reducer';

const rootReducer = combineReducers({ auth: authReducer, todos: todoReducer });

const logger = (state) => (next) => (action) => {
	console.log('action: ', action);
	return next(action);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

export { store };
