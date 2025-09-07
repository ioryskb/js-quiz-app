const questions = [
    {
        question: "Which is the largest country in the world?",
        answers: [
            {text: "China", correct: false},
            {text: "Russia", correct: true},
            {text: "USA", correct: false},
            {text: "Canada", correct: false},
        ]
    },

    {
        question: "What is the capital of Australia",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Melborn", correct: false},
            {text: "Canberra", correct: true},
            {text: "Brisbane", correct: false},
        ]
    },

    {
        question: "How many states are there in USA",
        answers: [
            {text: "58", correct: false},
            {text: "45", correct: false},
            {text: "55", correct: false},
            {text: "50", correct: true},
        ]
    },

    {
        question: "Which company introduced the first working generative AI model?",
        answers: [
            {text: "Tesla", correct: false},
            {text: "OpenAI", correct: true},
            {text: "Deepseek", correct: false},
            {text: "X", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestionIndex.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });

}