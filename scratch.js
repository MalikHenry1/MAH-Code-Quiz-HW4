import "./style.css";
var screen0Ele = document.querySelector("#screen0");
var screen0ButtonEle = document.querySelector("button");
var screen1Ele = document.querySelector("#screen1");
var screen1ButtonEle = document.querySelector("button");
var screen2Ele = document.querySelector("#screen2");
var screen2ButtonEle = document.querySelector("button");
var doSomethingEle = document.querySelector("#doSomething");
var saySomethingEle = document.querySelector("#saySomething");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#possibleAnswers");

var HIDE_CLASS = "hide";
var questions = [
    {
        question: "Question 1",
        answers: ["Answer1", "Answer 2", "Answer 3", "Answer 4"],
        answer: 0
    },
    {
        question: "Question 2",
        answers: ["Answer1", "Answer 2", "Answer 3", "Answer 4"],
        answer: 0
    }
];

var currentQuestion = 0;

var dynamicElements = [
    screen0Ele,
    screen1Ele,
    screen2Ele,
    doSomethingEle,
    saySomethingEle


];

function init() {
    setEventListeners();
}

function setState(state) {
    switch (state){
        case 1:
            populateQuestion();
            break;
            default:
            break;
    }

    dynamicElements.forEach(function (ele) {
        var possibleStatesAttr = ele.getAttribute("data-states");
        var possibleStates = JSON.parse(possibleStatesAttr);
        if (possibleStatesAttr.includes(state)) {
            ele.classList.remove(HIDE_CLASS);
        } else {
            ele.classList.add(HIDE_CLASS);
        }
    });
}

function populateQuestion() {
    var questionObj = questions[currentQuestion];
    answersEl.innerHTML = "";
    questionEl.textContent = questionObj.question;
        var li = document.createElement("li");
        li.textContent = question;
        answersEl.appendChild(li);


}; 