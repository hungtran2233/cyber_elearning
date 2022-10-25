const { useState, useEffect } = require("react");

function useLocalStorage(key) {
	const [value, setValue] = useState();

	useEffect(() => {
		const strValue = localStorage.getItem(key);
		if (strValue) {
			try {
				setValue(JSON.parse(strValue));
			} catch (err) {
				setValue(strValue);
			}
		}
	}, []);

	const setItem = (value) => {
		localStorage.setItem(
			key,
			typeof value === "string" ? value : JSON.stringify(value)
		);
		setValue(value);
	};

	return [value, setItem];
}

export default useLocalStorage;
