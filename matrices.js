//1D array approach
// var matrix1 = [3,8,4,6]; 
// var matrix2 = [4,0,1,-9];
// var summatrix = [];
// for(var i=0; i<matrix1.length; i++){
//     summatrix[i] = matrix1[i] + matrix2[i]; 
// } //O(N)
// console.log("The Sum of two matrices : " +summatrix);
//2D Array
var matrix1 = [[3,8],[4,6]];
var matrix2 = [[4,0],[1,-9]];
var summatrix = [[],[]];
for(var i=0; i<matrix1.length;i++){
    for(var j=0; j<matrix1[i].length;j++){
        summatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}
console.log(summatrix);