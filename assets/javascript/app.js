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

function countdown(){
    count--;
    $('#timer_number').html(count + "Seconds");
    $("#doneButton").on("click", function(){
    count = 0;
    return;
    });

    if(count == -1){
        timeUp();
        
    }
}

function startCountdown(){
    setInterval(countdown, 1000);
}

function timeUp(){
    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();
    var Q6 = $('input:radio[name="q6"]:checked').val();
    var Q7 = $('input:radio[name="q7"]:checked').val();
    var Q8 = $('input:radio[name="q8"]:checked').val();
    var Q9 = $('input:radio[name="q9"]:checked').val();
    var Q10 = $('input:radio[name="q10"]:checked').val();

    

}