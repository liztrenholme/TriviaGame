$(document).ready(function() {

	var triviaItems = ["one", "two", "three", "four", "five", "six", "seven", "eight", "end"];
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
	var timer = setTimeout(showAnswer, 1000 * 15);
});

// clicking on wrong answer turns all wrongs red and shows correct in green
$(".wrong").on("click", function(timer) {
	clearTimeout(timer);
	$(".wrong").addClass("wrongboo");
	$(".correct").addClass("correctyay");
	wrongGuesses++;
	totalAnswered++;
	$(".wrong").fadeOut();
	setTimeout(next, 1000 * 1);
});

// clicking on correct answer turns it green
$(".correct").on("click", function(timer) {
	clearTimeout(timer);
	$(".correct").addClass("correctyay");
	correctGuesses++;
	totalAnswered++;
	$(".wrong").fadeOut();
	setTimeout(next, 1000 * 1);
});

// showing correct answer in green if question is not answered in time
function showAnswer(timer) {
	clearTimeout(timer);
	$(".correct").addClass("correctyay");
	$(".wrong").hide();
	totalAnswered++;
	setTimeout(next, 1000 * 1);
}

// on to the next question
function next(timer) {
	clearTimeout(timer);
//	$(".questions", ".answers").hide();
	$(".answers").removeClass("wrongboo");
	$(".answers").removeClass("correctyay");
	console.log(triviaItems[totalAnswered]);
	var currentQuestion = document.getElementsByClassName(triviaItems[totalAnswered]);
	var previousQuestion = document.getElementsByClassName(triviaItems[totalAnswered - 1]);
	$(previousQuestion).remove();
	$(currentQuestion).removeClass("wrongboo correctyay");
	$(currentQuestion).show();
	if (triviaItems[totalAnswered] === "end") {
	$(".end-screen").addClass("end");
	$(".end-screen").append("You got " + correctGuesses + " of them right, and " + wrongGuesses + " of them wrong!");
}
}


});