// You should implement your task here.

module.exports = function towelSort (matrix) {
    let column
    let result = []
    if( matrix === undefined || matrix.length == 0 ){
      return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (column = i % 2 === 0) {
              column = j
            } else {
                column = matrix[i].length - j - 1
            }
            result.push(matrix[i][column])
        }
    }
    console.log(result);
    return result;
}
