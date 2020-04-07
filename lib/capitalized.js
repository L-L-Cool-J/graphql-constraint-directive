module.exports = function capitalized(s) {
    return typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1);
}