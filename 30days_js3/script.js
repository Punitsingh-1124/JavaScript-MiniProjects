const questions = [
    {
        question: " Which of the following is the correct syntax to declare a variable in JavaScript?",
        answers: [
            { text: "let x = 10;", Correct: true },
            { text: "variable x = 10;", Correct: false },
            { text: "var x := 10", Correct: false },
            { text: "int x = 10", Correct: false },
        ]
    },
    {
        question: " What is the output of the following code?(console.log(typeof null);)",
        answers: [
            { text: "undefined", Correct: false },
            { text: "null", Correct: false },
            { text: "object", Correct: true },
            { text: "string", Correct: false },
        ]
    },
    {
        question: " Which method is used to add one or more elements to the end of an array?",
        answers: [
            { text: "push()", Correct: true },
            { text: "pop()", Correct: false },
            { text: "shift()", Correct: false },
            { text: "unshift()", Correct: false },
        ]
    },
    {
        question: "How do you write a comment in JavaScript? ",
        answers: [
            { text: "<-- This is a comment -->", Correct: false },
            { text: " # This is a comment", Correct: false },
            { text: "// This is a comment", Correct: true },
            { text: "/* This is a comment */", Correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
     currentQuestionIndex = 0;
     score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.Correct) {
            button.dataset.Correct = answer.Correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.Correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.Correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scroed ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz();


