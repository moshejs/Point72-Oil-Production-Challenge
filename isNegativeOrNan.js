function isNegativeOrNaN(x) {
	return isNaN(x) || x <= 0
} 
module.exports = isNegativeOrNaN;
