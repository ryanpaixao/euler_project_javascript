var prime_stat = false;
var factors = [];
var largest_factor = 0;

var is_prime = function (number)	{
	for (var i = 2; i < number; i++)	{
		if ((number % i) === 0) {
			prime_stat = false;
			break;
		}
		else	{
			prime_stat = true;
		};
	};
	if (prime_stat)	{
		largest_factor = number;
	}
};


var find_factors = function (number)	{
	for (var i = 2; i < number; i++)	{
		if ((number % i) === 0) {
			factors.push(i);
		}
		else	{
			
		};
	};
};

var check_factors = function ()	{
	for (var i = 0; i < factors.length; i++)	{
		is_prime(factors[i]);
	}
}


find_factors(600851475143);
check_factors();
document.write(factors +"<br/><br/>");
document.write(largest_factor);