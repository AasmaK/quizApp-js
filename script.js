//create object for storing questions
const quizData = [{
    question: "1. What is the taste of cocoa tree seeds?",
    a: "Sour taste",
    b: "Acedic taste",
    c: "Bitter taste",
    d: "Sweet taste",
    correct: "c",
},
{
    question: "2.How many types of chocolate exist?",
    a: "4",
    b: "10",
    c: "7",
    d: "9",
    correct: "a",
},
{
    question: "3. What is the growth rate of chocolate industry per year worldwide?",
    a: "$55 billion-a-year",
    b: "$50 billion-a-year",
    c: "$53 billion-a-year",
    d: "$47.1 billion-a-year",
    correct: "b",
},
{
    question: "4. How much calories included in a 100 gram of milk chocolate?",
    a: "535 calories",
    b: "540 calories",
    c: "560 calories",
    d: "510 calories",
    correct: "b",
},
{
    question: "5. Which kind of chocolate is healthiest?",
    a: "Milk",
    b: "Dark",
    c: "White",
    d: "All the above",
    correct: "b",
},
{
    question: "6. How many milk chocolate bars would you have to eat to get the caffeine in one cup of coffee? ",
    a: "8",
    b: "2",
    c: "5",
    d: "14",
    correct: "d",
},
];


const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;

const deselectAnswers = () => {
answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
let answer;
answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
});
return answer;
};


const loadQuiz = () => {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionElement.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
};


loadQuiz();
submitButton.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
        quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     `
    }
}
});