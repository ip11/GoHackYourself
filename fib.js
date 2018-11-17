// var k = [[1,2],[3,4]];
// for(var i =0 ; i<k.length; i++){
// 	for(j = 0; j<k[i].length; j++)
// 		//console.log(k[i][j]);
// }

var kk = [[[1,2,3],[4,5,6],[7,8,9]]];
for(var i=0; i<kk.length; i++){
	for(j=0; j<kk[i].length;j++){
		for(k=0; k<kk[i][j].length;k++){
			console.log(kk[i][j][k]);
		}
	}
}