import { getNumberDistanceDate } from "../date";

export const sortByDateLates = (arr) => {
	let newArr = [...arr];
	let courseByDateLates = newArr.sort((item1, item2) => {
		let courseDate1 = getNumberDistanceDate(item1.ngayTao);
		let courseDate2 = getNumberDistanceDate(item2.ngayTao);
		if (courseDate1 < courseDate2) {
			return -1;
		}
		if (courseDate1 > courseDate2) {
			return 1;
		}
		return 0;
	});

	return courseByDateLates;
};

export const sortByDateOldest = (arr) => {
	let newArr = [...arr];
	let courseByDateOldest = newArr.sort((item1, item2) => {
		let courseDate1 = getNumberDistanceDate(item1.ngayTao);
		let courseDate2 = getNumberDistanceDate(item2.ngayTao);
		if (courseDate1 < courseDate2) {
			return 1;
		}
		if (courseDate1 > courseDate2) {
			return -1;
		}
		return 0;
	});

	return courseByDateOldest;
};
