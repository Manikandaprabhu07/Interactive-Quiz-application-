const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Management Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "React", "Angular", "Vue"],
    answer: "Python Script"
  },
  {
    question: "Which is used for web apps?",
    options: ["PHP", "Python", "JS", "All"],
    answer: "All"
  }
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

document.getElementById("start-btn").addEventListener("click", () => {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt) => {
    const li = document.createElement("li");
    li.innerText = opt;
    li.addEventListener("click", () => checkAnswer(opt, li));
    optionsEl.appendChild(li);
  });

  resultEl.innerText = "";
  nextBtn.style.display = "none";
}

function checkAnswer(selected, liElement) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    liElement.style.backgroundColor = "green";
    score++;
    resultEl.innerText = "Correct!";
  } else {
    liElement.style.backgroundColor = "red";
    resultEl.innerText = `Wrong! Correct: ${correct}`;
  }

  Array.from(optionsEl.children).forEach((li) => {
    li.style.pointerEvents = "none";
  });

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quiz.innerHTML = `
    <h2>Your Score: ${score} / ${quizData.length}</h2>
    <button onclick="location.reload()">Retake Quiz</button>
  `;
}
