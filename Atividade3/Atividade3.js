function transposeMatrix(matrix){
    let matrixString = '';
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrixString += matrix[i][j] + ' ';
        }
        matrixString += '\n';
    }
    console.log(matrixString);

    let transposedMatrixString = '';
    for(let j = 0; j < matrix[0].length; j++){
        for(let i = 0; i < matrix.length; i++){
            transposedMatrixString += matrix[i][j] + ' ';
        }
        transposedMatrixString += '\n';
    }
    console.log(transposedMatrixString);

}

const matrix = [
            [1, 2], 
            [3, 4], 
            [5, 6]
        ];

transposeMatrix(matrix);
