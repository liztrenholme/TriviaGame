
/*	- create a timer function (use solved timer from class) that resets for each question
	- hide() all questions until one before is answered
	- array for right answers, wrong answers, unanswered, then arr.length to tell user
	- show correct answer when wrong - maybe show() with .class attribute added?
	- questions for each written in html with hide() and show() methods
	- onclick events to start, next question, timer function
	- timer - next question if time runs out, onclick in .answers class disables timer, then goes straight to next question
	- reset game button at end
	- buttons for answers? .class added to each correct answer, useful for detecting correct answer click & displaying correct .class when ans is wrong?
*/


$(".one, .two, .three, .four, .five, .six, .seven, .eight").hide();
$(".answers, .questions").hide();
$("#start").show();

$("#start").on("click", function() {
	$("#start").hide();
	$("h1").hide();
	$(".questions, .answers, .one").show();

});