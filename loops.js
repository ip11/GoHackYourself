// //Types of For Loops

// //For 1
// for(var i=1 ; i <=10 ; i++){
//   //  console.log(i);
// }
// //For 2
// var i = 1;
// for(;i<=10;i++){
//     //console.log(i);
// }
// //For 3
// var i = 1;
// for(;i<=10;){
//     //console.log(i);
//     //i=i+1;
// }
// //For 4
var i=1;
for(;;)
{
    if(i<=10){
       console.log(i);
       i++;
       continue;
    }
   if(i >10)
    break;  
}
