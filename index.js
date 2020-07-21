module.exports = function not(fn) {
    function negation() {
        return !fn.apply(this, arguments);
    }
    
    return negation;
};
