var gamePattern = [];
let userClickedPattern = [];
var buttonColours = ["red", "green", "yellow", "green"];

var started = false;

var level = 0;

$(document).keypress(function () { 
    if (!started) {
        $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
});

$(".btn").on("click", function(){
    var userChosenColour = this.id;
    console.log(userChosenColour);

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour+"");
    animateButton(userChosenColour);

    checkAnswer(level);
});

var randomNumber = 0;

function nextSequence() {

    level += 1;
    $("h1").text("Level " + level);
    console.log("ciaoi");

    //createASequence(level);
    gamePattern.push(getARandomColour());
    showTheNewButtonOfTheSequence();

    userClickedPattern = [];
}

function animateButton(currentColour) {
    makeTheButtonFlash(currentColour);

    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {  $("#"+currentColour).removeClass("pressed"); }, 100);
    console.log("done correctly!");
}

var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

function makeTheButtonFlash(colourName) {
    $("#"+colourName).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(colourName) {
    let audio = new Audio("sounds/" + colourName + ".mp3");
    audio.play;
}

function checkAnswer(currentLevel) {
    var answerIsOkaySoFar = true;
    var comparisonEnded = false;
    var index = 0;
        while (answerIsOkaySoFar && !comparisonEnded) {
            if (userClickedPattern[index] != gamePattern[index]) {
                uLostAnimation();
                answerIsOkaySoFar = false;
                return;
            }
            index++;
            if (index >= userClickedPattern.length)
            comparisonEnded = true;
        }
        console.log("oshfshfiedsfcos");
        if (userClickedPattern.length === gamePattern.length)
        uWonThisRoundAnimation();
        return;
}

function uLostAnimation() {
    $("h1").text("U Lost! 你这个寄吧666.");
}

function uWonThisRoundAnimation(currentLevel) {
    nextSequence(currentLevel);
}

function getARandomColour() {
    var randomNumber = Math.floor(Math.random() * 4 - 0.01);
    return buttonColours[randomNumber];
}

/*function createASequence(currentLevel) {
     for (let index = 0; index < currentLevel; index++) {
        gamePattern.push(getARandomColour);
    }
    gamePattern.push(getARandomColour);
    console.log(gamePattern);
}*/

function showTheNewButtonOfTheSequence() {
    setTimeout(() => {  animateButton(gamePattern[gamePattern.length-1]); }, 1000);
    

}

/*gamePattern.forEach(colour => {
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play;
});*/
