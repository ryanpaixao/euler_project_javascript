var ans_total = 0;

var num_sort = function ()	{
	for (var i = 1; i < 1000; i++)	{
		if ((i % 3 === 0)||(i % 5 === 0))	{
			ans_total += i;
		};
	};
};	

num_sort();
document.write(ans_total);

