// Let's have some fun //

// Variables //
var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;


// Functions //
$(document).ready(function () {
    window.scrollTo(0, 500);
    $("#startButton").on("click", function () {
        startCountdown();
        return;
    }
});