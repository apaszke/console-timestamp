var fixDigits = function (input, length) {
	while(input.toString().length < length) {
		input = "0" + input;
	}
	return input;
}

module.exports = function (format) {
	var date = new Date();
	var out = format || "hh:mm:ss";
	out = out.replace("hh", fixDigits(date.getHours(), 2), "g");
	out = out.replace("mm", fixDigits(date.getMinutes(), 2), "g");
	out = out.replace("ss", fixDigits(date.getSeconds(), 2), "g");
	out = out.replace("iii", fixDigits(date.getMilliseconds(), 3), "g");
	out = out.replace("YYYY", fixDigits(date.getFullYear(), 4), "g");
	out = out.replace("YY", date.getFullYear().toString().slice(-2), "g");
	out = out.replace("MM", fixDigits(date.getMonth(), 2), "g");
	out = out.replace("DD", fixDigits(date.getDate(), 2), "g");
	return out;
}
