var prime_stat = false;

var is_prime = function (number)	{
	for (var i = 2; i < number; i++)	{
	    document.write(i);
		if ((number % i) === 0) {
			document.write("no")
			prime_stat = false;
			break;
		}
		else	{
			prime_stat = true;
		};
	};
};

is_prime(99);
document.write(prime_stat);