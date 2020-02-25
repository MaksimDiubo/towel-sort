
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length < 1) {
        return [];
    } else {
        return matrix.flatMap(item => matrix.indexOf(item) % 2 !== 0 ? item.reverse() : item);
    }   
}
