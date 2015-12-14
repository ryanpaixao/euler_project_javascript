document.write('This JavaScript program answers the following question: <br/><br/><br/>');

document.write('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.');
document.write('<br/><br/>The answer is: ');
var answers = [];
var ans_total = 0;

var num_sort = function ()	{
	for (var i = 1; i < 1000; i++)	{
		if ((i % 3 === 0)||(i % 5 ===0))	{
			answers.push(i);
		}
		else	{

		}
	};
};	

var sum_sort = function (answers)	{
	for (var j = 0; j < answers.length; j++)	{
		ans_total += answers[j];
	}
};

num_sort();
sum_sort(answers);
document.write(ans_total);