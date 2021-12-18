import { useState } from 'react';
import { useFetch, useTimeout } from '../Hooks/CustomHooks';

const GithubSearch = () => {
	const [ text, setText ] = useState('');
	const [ page, setPage ] = useState(1);

	
	const state = useFetch(`https://api.github.com/search/users?q=${text || 'masai'}&&page=${page}`);

	const handleChange = (e) => {
		const { value } = e.target;
		setText(value);
	};

	return (
		<div>
			<h2>Github Search Box...</h2>
			<input type='text' onChange={handleChange} />
			{state.loading && 'Fetching Data...'}
			{!state.loading && state.data && state.data.map(({ login, id }) => <li key={id}>{login}</li>)}
		</div>
	);
};

export default GithubSearch;
