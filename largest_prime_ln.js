var largest_factor = 0;


var is_prime = function (number)	{
    for (var i = 1000; i < (number / 1000); i++)    {
        if (number % i === 0)   {
            var count = 1;
            for (var j = 2; j < i; j++) {
                if (i % j === 0)    {
                    count += 1;
                }
            };
            if (count === 1)    {
                largest_factor = i;
            };
        };
    };
};

is_prime(600851475143);
document.write(largest_factor);
