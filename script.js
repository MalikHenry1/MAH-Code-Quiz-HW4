//DOM Elements
var questionEl = document.querySelector('#question1');
var answers = Array.from(document.querySelectorAll('.answer-text'));
var progressText = document.querySelector('#progressText');
var score = document.querySelector('#question1');
var timeLeft = 100;

// Questions Array
var questions = [
    {
        question: "Question 1",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1" // change to string
    },
    {
        question: "Question 2",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },
    {
        question: "Question 3",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },
    {
        question: "Question 4",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },
    {
        question: "Question 5",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer:"Answer 1"
    },
    {
        question: "Question 6",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },

    {
        question: "Question 7",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },

    {
        question: "Question 8",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },

    {
        question: "Question 9",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    },

    {
        question: "Question 10",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 1"
    }




];




//Screens
var homeScreenEl = document.querySelector('#homescreen');
var endScreenEl = document.querySelector('#endscreen');
var highScoresEl = document.querySelector('#highscores');

var timeLeftEl = document.querySelector('.time')
var score = 0;
var questionCount = 0;
var rightAnswer = true;
var questionsLeft = [];

//Buttons
function generateQuestions() {
    var questionEl = document.querySelector("#question");
    var currentQuestion = questions[questionCount].question;
    questionEl.textContent = currentQuestion;
    console.log(currentQuestion);
}
function checkAnswer(evt) {
    if(questionCount === 9 ) {
        
    }

    evt.preventDefault();
    console.log(evt.target.innerText);
    var correctAnswer = questions[questionCount].answer;
    if(evt.target.innerText === correctAnswer){
        alert("Correct!");
        score++;
        questionCount++;
        generateQuestions()
        generateAnswers()

    } else {

     alert("Incorrect!")
        timeLeft -= 5;
        questionCount++;
        generateQuestions()
        generateAnswers()
    }
    

}


function generateAnswers() {
    var answers = questions[questionCount].answers;
    for(var i=0; i<answers.length; i++){
        var choice = answers[i];
        document.querySelector("#a" + i).textContent = choice;

        document.querySelector("#a" + i).addEventListener('click', checkAnswer);
    }


}

function timer() {
    timeLeftInterval = setInterval(function() {
        if (timeLeft<=0) {
            timeLeftEl.textContent = "GAME OVER"
            clearInterval(timeLeftInterval);
        } 
        timeLeftEl.textContent = "Time Left: " + timeLeft + "s";
        timeLeft--;
    }, 1000);
}

function startQuiz() {
    timer();
    generateQuestions();
    generateAnswers();

}

startQuiz();

