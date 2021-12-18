import { Container } from '@mui/material';
import { useTimeout } from './Hooks/CustomHooks';

import GithubSearch from './Components/GithubSearch';

function App() {
	const isReady = useTimeout(5000);

	return (
		<div className='App'>
			<Container>
				<h1>Hello, Hola!</h1>
				<h2>{isReady ? 'Sorry was stuck in traffic! 😅' : "he's on his way 🏃 🏃 🏃"}</h2>
				<GithubSearch />
			</Container>
		</div>
	);
}

export default App;
