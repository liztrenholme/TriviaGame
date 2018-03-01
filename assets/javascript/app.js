
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

$(document).ready(function() {

var triviaItems = [".one .two", ".three", ".four", ".five", ".six", ".seven", ".eight"];
var correctGuesses = 0;
var wrongGuesses = 0;
var totalAnswered = 0;


$(".one, .two, .three, .four, .five, .six, .seven, .eight").hide();
$(".answers, .questions").hide();
$("#start").show();

// clicking on the start button begins the game by showing the first question
$("#start").on("click", function() {
	$("#start").hide();
	$("h1").hide();
	$(".questions, .answers, .one").show();
	setTimeout(showAnswer, 1000 * 15);
});

// clicking on wrong answer turns all wrongs red and shows correct in green
$(".wrong").click(function() {
  clearTimeout();
  $(".wrong").addClass("wrongboo");
  $(".correct").addClass("correctyay");
  wrongGuesses++;
  totalAnswered++;
  setTimeout(nextQuestion, 1000 * 3);
});

// clicking on correct answer turns it green
$(".correct").click(function() {
	clearTimeout();
	$(".correct").addClass("correctyay");
	correctGuesses++;
	totalAnswered++;
	setTimeout(next, 1000 * 3);
});

// showing correct answer in green if question os not answered in time
function showAnswer() {
	$(".correct").addClass("correctyay");

}

function next() {
	var c = triviaItems[totalAnswered];
	nextQuestion(".questions", ".answers", c);
	}

// on to the next question
function nextQuestion(a, b, c) {
	$(a, b, c).show();
}

});