function bigImg(x) {
    x.style.height = "4.5em";
    x.style.width = "4.5em";
};

function normalImg(x) {
    x.style.height = "4em";
    x.style.width = "4em";
};


var num_sort = function ()	{
	var ans_total = 0; // variable that will hold sum total.
	for (var i = 1; i < 1000; i++)	{ // for loop that runs through numbers 1 to 999
		if ((i % 3 === 0)||(i % 5 === 0))	{ // checks to see if number is divisible by 3 or 5
			ans_total += i; // adds number to running total
		};
	};
	document.getElementById("output1").innerHTML = ans_total; // prints out total to html page
	var ans_total = 0; // resets total to 0
};	


var fibonacci = function()	{
	var number_new = 1;
	var number_old = 0;
	var fibo_array = []; // sets up array that will store sequence set
	var total = 0;
	var keep_going = true;
	while (keep_going)	{
		number_old += number_new;
		if  (number_old < 4000000)  {
            number_new += number_old; // adds old number to new number
		    fibo_array.push(number_old); // adds old number to fibo array
		    fibo_array.push(number_new); // adds new number to fibo array
		}
		else    {
		    keep_going = false;
		}
	};
	// for loop that sums up numbers from fibo array
	for (var j = 0; j < fibo_array.length; j++)	{
		if (fibo_array[j] % 2 === 0)	{
			total += fibo_array[j];
		};
	};
	document.getElementById("output2").innerHTML = total; // prints total on html page
};



var prime_factors = function (number)  {
	// This function can handle prime numbers up to 9 digits in length
    var factor_list = []; // an array of number's factors
    var vectors = []; // a vector array of exponents of factor list
    var num_2 = number;
    var count = 0; // keeps track of total exponent power of single factor
    while (num_2 % 2 === 0)	{ // checks to see if number is divisible by 2
    	count++; // adds 1 to vector count
    	num_2 = num_2 / 2; // divides number/quotient by two
    	// if number can no longer be divided by 2, add divisor to factor list
    	if (!(num_2 % 2 === 0))	{ 
    		factor_list[0] = 2;
    		vectors.push(count);// adds count to vector array
    		count = 0; // resets vector counter
    	}
	};
	//loop that runs through odd number integer set to see if any are factors for number
	for (var i = 3; i <= num_2; i+=2)	{ 
		while (num_2 % i === 0)	{
	    	count++;
	    	num_2 = num_2 / i;
	    	if (!(num_2 % i === 0))	{
	    		factor_list.push(i);
	    		vectors.push(count);
	    		count = 0; // resets vector counter
	    	}
	    }
	};
	greatest_factor = factor_list[(factor_list.length - 1)]
	document.getElementById("output3").innerHTML = greatest_factor;
    
};










