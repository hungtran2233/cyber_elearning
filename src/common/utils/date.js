import { format, formatDistance, getDate } from "date-fns";

export const getCurrentDay = () => {
	const date = format(new Date(), "dd/MM/yyyy");
	return date;
};

export const convertStringToDate = (strDate) => {
	let pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
	let arrayDate = strDate.match(pattern);
	let dt = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
	return dt;
};

export const getDistanceDate = (oldDate) => {
	const a = convertStringToDate(oldDate);
	const distanceDate = formatDistance(new Date(a), new Date());
	return distanceDate;
};

////////////////
// Get distance between two date
const stringToDate = (_date, _format, _delimiter) => {
	var formatLowerCase = _format.toLowerCase();
	var formatItems = formatLowerCase.split(_delimiter);
	var dateItems = _date.split(_delimiter);
	var monthIndex = formatItems.indexOf("mm");
	var dayIndex = formatItems.indexOf("dd");
	var yearIndex = formatItems.indexOf("yyyy");
	var month = parseInt(dateItems[monthIndex]);
	month -= 1;
	var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
	return formatedDate;
};

export const getNumberDistanceDate = (date) => {
	const currentDate = new Date();
	const oldDate = stringToDate(date, "dd/MM/yyyy", "/");
	const distance = Math.floor(
		(Date.parse(currentDate) - Date.parse(oldDate)) / 86400000
	);
	return distance;
};
