const startButton = document.getElementById('start-btn');
const startPage = document.getElementById('page-s');
const questionPage1 = document.getElementById('page-1');
const questionPage2 = document.getElementById('page-2');
const questionPage3 = document.getElementById('page-3');
const questionPage4 = document.getElementById('page-4');
const questionpage5 = document.getElementById('page-5');
var second = document.getElementById('second');
var pageDone = document.getElementById('page-done');
var submitButton = document.getElementById('submit-button');
var nameText = document.getElementById('name-text');
var highScore = document.getElementById('highscores');
var nameList = document.getElementById('name-list');
var score = 0;
var restart = document.getElementById('restart');

const buttons = document.getElementById('answer-buttons');

const buttons2 = document.getElementById('Question2Buttons');
const buttons3 = document.getElementById('Question3Buttons');
const buttons4 = document.getElementById('Question4Buttons');
const buttons5 = document.getElementById('Question5Buttons');

var lastPage = 0;
var currentQuestion = 0;
var timeInterval = setInterval(startTimerfunction, 1000);
var timer = 100;



function startGame() {
    console.log("startPage: " + startPage);
    startPage.style.display = "none";
    questionPage1.style.display = "block";
}


function startTimerfunction() {
    second.textContent = timer + "seconds";
    timer--
    console.log(timer);
    if (timer === 0) {
        
        clearInterval(timeInterval);
    }
}

function myFunction() {
    alert("True");
    score++;
}
var questionArray = [questionPage1, questionPage2, questionPage3, questionPage4, questionpage5, pageDone];

function randomQuestion(event) {
    //event.preventDefault();
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        questionArray[currentQuestion].style.display = "none";
        currentQuestion++

        if (currentQuestion < questionArray.length) {
            questionArray[currentQuestion].style.display = "block";
        }
    }
}

function submitPage(event) {
    event.preventDefault() ;
    var nameInput = nameText.value
    pageDone.style.display = "none";
    highScore.style.display = "block";
    nameList.textContent = nameInput + " " + "Score: " + score;
}

function restartGame(){
    location.reload();
}




startButton.addEventListener('click', startTimerfunction);
//startbutton
setInterval(function01, 1000);

startButton.addEventListener('click', startGame);


buttons.addEventListener('click', randomQuestion);
buttons2.addEventListener('click', randomQuestion);
buttons3.addEventListener('click', randomQuestion);
buttons4.addEventListener('click', randomQuestion);
buttons5.addEventListener('click', randomQuestion);

submitButton.addEventListener('click',submitPage);
restart.addEventListener('click',restartGame);
