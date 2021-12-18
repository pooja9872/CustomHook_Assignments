import { createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const initState = {loading: false, error: false, todos: []};
	const value = { initState: initState };
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
