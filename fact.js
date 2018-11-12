//Iterative approach
function fact(number){
	
	var factorial = 1;

	for(i=1; i <= number ; i++){
		factorial = factorial*i;
	}
	console.log(factorial);
}
fact(5);

//recursive approach
function fact1(number1){
	if(number1 <= 1){
		return 1;
	}
	return number1*fact1(number1-1);

}

console.log(fact1(6))
