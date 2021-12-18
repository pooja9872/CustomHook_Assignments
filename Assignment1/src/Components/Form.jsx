import { Button, FormControl, Input, Stack } from '@mui/material';
import { useState } from 'react';
import { addTodo } from '../Redux/Todos/action';

const Form = ({state, dispatch}) => {
	const [ text, setText ] = useState('');

	const handleText = (e) => {
		const { value } = e.target;
		setText(value);
	};

	const handleTodo = () => {
		dispatch(addTodo(text));
		setText('');
	};

	return (
		<FormControl>
			<Stack direction='row' spacing='1rem' justifyContent='center'>
				<Input
					sx={{ minWidth: '600px' }}
					value={text}
					onChange={handleText}
					id='todo-input'
					placeholder='Enter your task'
				/>
				<Button onClick={handleTodo} size='small' variant='outlined'>
					Add Todo
				</Button>
			</Stack>
		</FormControl>
	);
};

export default Form;
