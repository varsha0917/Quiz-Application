const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "Jane Austen", "Charles Dickens", "William Shakespeare"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    feedbackElement.textContent = "";
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsElement.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById("feedback");
    if (selectedOption === quizData[currentQuestion].answer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "Wrong!";
        feedbackElement.style.color = "red";
    }
    document.getElementById("score").textContent = `Score: ${score}/${quizData.length}`;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert(`Quiz completed! Your score: ${score}/${quizData.length}`);
    }
}

window.onload = loadQuestion;
