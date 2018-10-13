$(document).ready(function() {

	var triviaItems = ["one", "two", "three", "four", "five", "six", "seven", "eight", "end"];
	var correctGuesses = 0;
	var wrongGuesses = 0;
	var totalAnswered = 0;
	var counter = 15;
	// var timer;
	var answeredQuestions = [];

// setting up the page to begin
	$(".one, .two, .three, .four, .five, .six, .seven, .eight").hide();
	$(".answers, .questions, #countdown, #reset").hide();
	$("#start").show();


// clicking on the start button begins the game by showing the first question
$("#start").on("click", function() {
	$("#start").hide();
	$("h1").hide();
	$(".questions, .answers, .one, #countdown").show();
	$("#countdown").text(counter);
	timer = setInterval(countdown, 1000);
});

// timer tha counts down 15 seconds for each question
function countdown(timer) {
	counter--;
	$("#countdown").text(counter);
	if (counter === 0) {
		clearInterval(timer);
		showAnswer();
	}
}

// clicking on wrong answer turns all wrongs red and shows correct in green
$(".wrong").on("click", function(timer) {
	clearInterval(timer);
	counter = 16;
	$(".wrong").addClass("wrongboo");
	$(".correct").addClass("correctyay");
	$(".wrong, .correct").removeClass("hover");
	wrongGuesses++;
	totalAnswered++;
	$(".wrong").fadeOut();
	setTimeout(next, 1000 * 2);
});

// clicking on correct answer turns it green
$(".correct").on("click", function(timer) {
	clearInterval(timer);
	counter = 16;
	$(".correct").addClass("correctyay");
	$(".wrong, .correct").removeClass("hover");
	correctGuesses++;
	totalAnswered++;
	$(".wrong").fadeOut();
	setTimeout(next, 1000 * 1);
});

// showing correct answer in green if question is not answered in time
function showAnswer(timer) {
	clearInterval(timer);
	counter = 16;
	$(".correct").addClass("correctyay");
	$(".wrong, .correct").removeClass("hover");
	$(".wrong").fadeOut();
	totalAnswered++;
	setTimeout(next, 1000 * 2);
}

// on to the next question
function next(timer) {
	clearInterval(timer);
	counter = 16;
	$(".answers").removeClass("wrongboo");
	$(".answers").removeClass("correctyay");
	$(".correct, .wrong").addClass("hover");
	console.log(triviaItems[totalAnswered]);
	var currentQuestion = document.getElementsByClassName(triviaItems[totalAnswered]);
	var previousQuestion = document.getElementsByClassName(triviaItems[totalAnswered - 1]);
	answeredQuestions.push(previousQuestion);
	$holder = $(previousQuestion).detach();

	$(currentQuestion).removeClass("wrongboo correctyay");
	$(currentQuestion).show();
	if (triviaItems[totalAnswered] === "end") {
		clearInterval(timer);
		timer = 0;
		$("#countdown").hide();
		$(".end-screen").addClass("end");
		$(".end-screen").append("You got " + correctGuesses + " of them right, and " + wrongGuesses + " of them wrong!");
		$("#reset").show();
	}
}

// $("#reset").on("click", function(timer) {
// 	clearInterval(timer);
// })

$("#reset").on("click", function(timer) {
	location.reload(true)
});

});