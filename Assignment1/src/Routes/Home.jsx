import { Box } from '@mui/system';
import Form from '../Components/Form';
import TodoList from '../Components/TodoList';
import { Stack, Typography } from '@mui/material';

import { useContext, useReducer } from 'react';

import { AppContext } from '../Context/AppContextProvider';
import reducer from '../Redux/Todos/reducer';

const Home = () => {
	const { initState } = useContext(AppContext);

	const [ state, dispatch ] = useReducer(reducer, initState);
	console.log('state:', state)
	const todos = state.todos;

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getTodoLoading());
	// 	axios
	// 		.get('http://localhost:3001/todos')
	// 		.then((res) => {
	// 			dispatch(getTodoSuccess(res.data));
	// 		})
	// 		.catch((err) => dispatch(getTodoError()));
	// }, []);

	return (
		<Stack spacing={2} direction='column' justifyContent='center'>
			<Typography textAlign='center' variant='h1' color='primary'>
				Todo App
			</Typography>
			<Form state={state} dispatch={dispatch} />
			<Box>
				<TodoList state={state} dispatch={dispatch} list={todos} />
			</Box>
		</Stack>
	);
};

export default Home;
