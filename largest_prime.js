var is_prime = function (number)  {
    if (number % 2 === 0)   { // checks to see if number is even
        number2 = ((number / 2) + 1);  // divides number in half and makes it odd
        if (number2 % 2 === 0)   { // checks to see if number2 is even
        	number2 = number2 + 1;  // subtracts 1 to make it odd
        }
    }
    else    {
        number2 = (Math.floor(number / 2)); // divides number in half and rounds up
        if (number2 % 2 === 0)   { // checks to see if number2 is even
        	number2 = number2 + 1;  // adds 1 to make it odd
		}
    };
    var largest_factor = 0; //variable that will hold the largest prime factor of number
    
    // starts for loop at upper range (number/2), checks only odd numbers
    for (var i = number2 ; i > 1; i-=2)    { 
	    if (number % i === 0)  { // checks if number is divisible by i *WORKS*
	    	var count = 0; // counter that tells if number has any factors
            for (var j = 2; j < i; j++) { // for loop to check if i is a prime number
                if (i % j === 0)    { // checks to see if i is divisible by j
                    break; // breaks if i has factors because i is not prime
                }
                // checks to see if at final factor for i, and that i has no factors
                else if (j === (i - 1)&&(count === 0))	{ 
                	largest_factor = i;
                }
            }
	    }
	    // checks to see if for loop has found a prime factor
	    else if (largest_factor > 0)	{
	    	break; // stops loop because largest/first prime factor has been found
	    }
    };

    console.log(largest_factor);
    //console.log(count);
};
is_prime(899967878)