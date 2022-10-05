export const formatFullName = (fullName) => {
	var convertToArray = fullName.toLowerCase().split(" ");
	var result = convertToArray.map((val) => {
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});

	return result.join(" ");
};

// toUpperCase Name -- in hoa ki tu dau tien
export const upperCaseFirst = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
