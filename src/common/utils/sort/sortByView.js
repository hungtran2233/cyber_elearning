export const sortByViewDecrement = (arr) => {
	let newArr = [...arr];
	let courseByViewDecrement = newArr.sort((item1, item2) => {
		let courseView1 = item1.luotXem;
		let courseView2 = item2.luotXem;
		if (courseView1 < courseView2) {
			return 1;
		}
		if (courseView1 > courseView2) {
			return -1;
		}
		return 0;
	});
	return courseByViewDecrement;
};

export const sortByViewIncrement = (arr) => {
	let newArr = [...arr];
	let courseByViewIncrement = newArr.sort((item1, item2) => {
		let courseView1 = item1.luotXem;
		let courseView2 = item2.luotXem;
		if (courseView1 < courseView2) {
			return -1;
		}
		if (courseView1 > courseView2) {
			return 1;
		}
		return 0;
	});
	return courseByViewIncrement;
};
