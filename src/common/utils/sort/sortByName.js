export const sortByNameAZ = (arr) => {
	let newArr = [...arr];
	let courseByNameAZ = newArr.sort((item1, item2) => {
		let courseName1 = item1.tenKhoaHoc.toLowerCase();
		let courseName2 = item2.tenKhoaHoc.toLowerCase();
		if (courseName1 < courseName2) {
			return -1;
		}
		if (courseName1 > courseName2) {
			return 1;
		}
		return 0;
	});
	return courseByNameAZ;
};

export const sortByNameZA = (arr) => {
	let newArr = [...arr];
	let courseByNameZA = newArr.sort((item1, item2) => {
		let courseName1 = item1.tenKhoaHoc.toLowerCase();
		let courseName2 = item2.tenKhoaHoc.toLowerCase();
		if (courseName1 < courseName2) {
			return 1;
		}
		if (courseName1 > courseName2) {
			return -1;
		}
		return 0;
	});
	return courseByNameZA;
};
