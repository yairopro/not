module.exports = function not(fn) {
	return function negation() {
		return !fn.apply(this, arguments);
	};
};
