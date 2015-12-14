document.write('This JavaScript program answers the following question: <br/><br/><br/>');

document.write('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.');
document.write('<br/><br/>The answers are: ');
var answers = [];
for (var i = 1; i < 1000; i++)	{
	if ((i % 3 === 0)||(i % 5 ===0))	{
		answers.push(i);
	}
	else	{

	}
};
document.write(answers);