$(document).ready(function() {

	var triviaItems = ["one", "two", "three", "four", "five", "six", "seven", "eight", "end"];
	var correctGuesses = 0;
	var wrongGuesses = 0;
	var totalAnswered = 0;
	var counter = 15;
	var timer;

	$(".one, .two, .three, .four, .five, .six, .seven, .eight").hide();
	$(".answers, .questions, #counter").hide();
	$("#start").show();


// clicking on the start button begins the game by showing the first question
$("#start").on("click", function() {
	$("#start").hide();
	$("h1").hide();
	$(".questions, .answers, .one").show();
	$("#counter").text(counter);
	timer = setInterval(countdown, 1000);
});

function countdown(timer) {
	counter--;
	$("#counter").text(counter);
	if (counter === 0) {
		clearInterval(timer);
		showAnswer();
	}
}

// clicking on wrong answer turns all wrongs red and shows correct in green
$(".wrong").on("click", function(timer) {
	clearInterval(timer);
	counter = 15;
	$(".wrong").addClass("wrongboo");
	$(".correct").addClass("correctyay");
	wrongGuesses++;
	totalAnswered++;
	$(".wrong").fadeOut();
	setTimeout(next, 1000 * 2);
});

// clicking on correct answer turns it green
$(".correct").on("click", function(timer) {
	clearInterval(timer);
	counter = 15;
	$(".correct").addClass("correctyay");
	correctGuesses++;
	totalAnswered++;
	$(".wrong").fadeOut();
	setTimeout(next, 1000 * 1);
});

// showing correct answer in green if question is not answered in time
function showAnswer(timer) {
	clearInterval(timer);
	counter = 15;
	$(".correct").addClass("correctyay");
	$(".wrong").fadeOut();
	totalAnswered++;
	setTimeout(next, 1000 * 2);
}

// on to the next question
function next(timer) {
	clearInterval(timer);
	counter = 15;
	$(".answers").removeClass("wrongboo");
	$(".answers").removeClass("correctyay");
	console.log(triviaItems[totalAnswered]);
	var currentQuestion = document.getElementsByClassName(triviaItems[totalAnswered]);
	var previousQuestion = document.getElementsByClassName(triviaItems[totalAnswered - 1]);
	$(previousQuestion).remove();
	$(currentQuestion).removeClass("wrongboo correctyay");
	$(currentQuestion).show();
	if (triviaItems[totalAnswered] === "end") {
		clearInterval(timer);
		$("#counter").hide();
		$(".end-screen").addClass("end");
		$(".end-screen").append("You got " + correctGuesses + " of them right, and " + wrongGuesses + " of them wrong!");
	}
}


});