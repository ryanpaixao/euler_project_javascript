var number_new = 1;
var number_old = 0;
var fibo_array = [];
var total = 0;
var keep_going = true;

var fibonacci = function()	{
	while (keep_going)	{
		number_old += number_new;
		if  (number_old < 4000000)  {
            number_new += number_old;
		    fibo_array.push(number_old);
		    fibo_array.push(number_new);
		}
		else    {
		    keep_going = false;
		}
	};
};

var sum_even = function()	{
	for (var j = 0; j < fibo_array.length; j++)	{
		if (fibo_array[j] % 2 === 0)	{
			total += fibo_array[j];
		};
	};
};

fibonacci();
sum_even();
document.write(fibo_array + '<br/><br/>');
document.write(total);