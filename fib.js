//iterative approach

function fib1(n){
	var fib = [0,1];
	if(n == 0){
		return fib[0];
	}
	if(n==1){
		return fib;

	}
	if(n>=2){
		for(var j=1; j<n-1; j++){
			fib.push(fib[j] + fib[j-1]);

		}
	}
	return fib;
}
console.log(fib1(10));