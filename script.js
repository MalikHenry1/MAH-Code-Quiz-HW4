//DOM Elements
var questionEl = document.querySelector('#question1');
var answers = Array.from(document.querySelectorAll('.answer-text'));
var progressText = document.querySelector('#progressText');
var score = document.querySelector('#question1');
var timeLeft = 60;

// Questions Array
var questions = [
    {
        question: "What does API stand for?",
        answers: ["Application Programming Interface", "Applied Program Interaction", "Auxiliary Product Interpolation", "Altered Productivity Interloper"],
        answer: "Application Programming Interface" // change to string
    },
    {
        question: "What does HTML stand for?",
        answers: ["Holographic Terabyte Metastasis Loop", "Hypertext Transfer Manual Language", "Hypertext Markup Language", "Halted Transfer Marked Loop"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Computer Surround Styling", "Cascading Style Sheets", "Computational Server System", "Compound Stack Server"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What data type has either true or false as its value?",
        answers: ["number", "float", "string", "boolean"],
        answer: "boolean"
    },
    {
        question: "What does DOM stand for?",
        answers: ["Direct Organization Model", "Document Object Model", "Disassembled Object Markup", "Distinct Orbital Module"],
        answer:"Document Object Model"
    },
    {
        question: "What is the data type of window.confirm?",
        answers: ["string", "number", "float", "boolean"],
        answer: "boolean"
    },

    {
        question: "The getElementById method is equivalent to _______.",
        answers: ["window.prompt", "querySelector", "stringify", "LocalStorage"],
        answer: "querySelector"
    },

    {
        question: "An if/else statement is enclosed in _______.",
        answers: ["curly braces", "quotations", "parantheses", "square brackets"],
        answer: "parantheses"
    },

    {
        question: "An array is used to store _____.",
        answers: ["numbers", "strings", "other arrays", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "Strings must be enclosed in",
        answers: ["curly braces", "quotations", "parantheses", "square brackets"],
        answer: "quotations"
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
            // window.location.href = "highscore.html"
        } 
        timeLeftEl.textContent = "Time Left: " + timeLeft + "s";
        timeLeft--;
    }, 1000);
}

function saveHighScores() {
    var initials = initialsDiv.value.trim();
    // TODO make sure initials is not empty;
    // grabbing an empty array or scores array from local storage
    var scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    // creatnig a new object with the values from the user, creating keys based off user score and initials
    var newScore = {score:score,initials:initials};
    // pushing the new object into the array
    scores.push(newScore);
    window.localStorage.setItem("scores", JSON.stringify(scores));
}

function startQuiz() {
    timer();
    generateQuestions();
    generateAnswers();

}

startQuiz();



