var num_sort = function ()	{
	var ans_total = 0; 
	for (var i = 1; i < 1000; i++)	{
		if ((i % 3 === 0)||(i % 5 === 0))	{
			ans_total += i;
		};
	};
	document.getElementById("output1").innerHTML = ans_total;
	var ans_total = 0;
};	


var fibonacci = function()	{
	var number_new = 1;
	var number_old = 0;
	var fibo_array = [];
	var total = 0;
	var keep_going = true;
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
	for (var j = 0; j < fibo_array.length; j++)	{
		if (fibo_array[j] % 2 === 0)	{
			total += fibo_array[j];
		};
	};
	document.getElementById("output2").innerHTML = total;
};



