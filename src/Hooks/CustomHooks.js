import { useEffect, useState } from 'react';

export const useTimeout = (ms) => {
	const [ ready, setReady ] = useState(false);

	useEffect(
		() => {
			const timerId = setTimeout(() => {
				setReady(true);
			}, ms);

			return () => clearTimeout(timerId);
		},
		[ ms ]
	);

	return ready;
};

export const useFetch = (url) => {
	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(false);
	useEffect(
		() => {
			fetch(url)
				.then((res) => res.json())
				.then(({ items }) => {
					setLoading(false);
					setData(items);
					setError(false);
				})
				.catch((err) => {
					setLoading(false);
					setError(true);
				});
		},
		[ url ]
	);

	return { loading, data, error };
};
