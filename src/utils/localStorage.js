const loadData = (key) => {
	const data = JSON.parse(localStorage.getItem(key));
	return data;
};

const saveData = (key, item) => {
	localStorage.setItem(key, JSON.stringify(item));
};

export { loadData, saveData };
