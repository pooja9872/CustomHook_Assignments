import { Button, List, Stack } from '@mui/material';
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list, state, dispatch }) => {
	const [ completed, setCompleted ] = useState(false);
	const [ page, setPage ] = useState(1);
	const limit = 5;
	const offset = (page - 1) * limit;

	const handlePage = (change) => {
		if (page === 1 && change < 0) return;
		setPage(page + change);
	};

	const handleCompleted = () => {
		setCompleted(!completed);
	};

	return (
		<List>
			{list.map((item, index) => {
				if (completed && item.status) return <TodoItem dispatch={dispatch} state={state} key={item.id} {...item} />;
				else if (!completed && index >= offset && index < offset + limit)
					return <TodoItem key={item.id} {...item} dispatch={dispatch} state={state} />;
				else return '';
			})}

			<Stack direction='row' spacing={2}>
				{!completed && <>
				<Button disabled={offset + limit > list.length}  onClick={() => handlePage(1)} variant='outlined'>
					Next
				</Button>
				<Button disabled={page === 1} onClick={() => handlePage(-1)} variant='outlined'>
					Prev
				</Button>
				</>
				}
	
				<Button onClick={handleCompleted} variant='outlined'>
					{completed ? 'Show All' : 'Show Completed'}
				</Button>
			</Stack>
		</List>
	);
};

export default TodoList;
