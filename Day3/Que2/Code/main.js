const data = [
  {
    "id": 1,
    "question": "What is the largest planet in our solar system?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Jupiter"
  },
  {
    "id": 2,
    "question": "Which country is famous for the Great Wall?",
    "options": [
      "Japan",
      "China",
      "India",
      "Korea"
    ],
    "answer": "China"
  },
  {
    "id": 3,
    "question": "What is the capital of France?",
    "options": [
      "Madrid",
      "Berlin",
      "Rome",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "id": 4,
    "question": "How many continents are there in the world?",
    "options": [
      "Five",
      "Six",
      "Seven",
      "Eight"
    ],
    "answer": "Seven"
  },
  {
    "id": 5,
    "question": "What is the tallest mountain in the world?",
    "options": [
      "K2",
      "Mount Everest",
      "Kangchenjunga",
      "Makalu"
    ],
    "answer": "Mount Everest"
  },
  {
    "id": 6,
    "question": "Which ocean is the largest on Earth?",
    "options": [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "answer": "Pacific Ocean"
  },
  {
    "id": 7,
    "question": "What is the fastest land animal?",
    "options": [
      "Cheetah",
      "Leopard",
      "Horse",
      "Lion"
    ],
    "answer": "Cheetah"
  },
  {
    "id": 8,
    "question": "Which planet is closest to the Sun?",
    "options": [
      "Venus",
      "Earth",
      "Mercury",
      "Mars"
    ],
    "answer": "Mercury"
  },
  {
    "id": 9,
    "question": "Which country is known as the 'Land of the Rising Sun'?",
    "options": [
      "Thailand",
      "China",
      "Japan",
      "Vietnam"
    ],
    "answer": "Japan"
  },
  {
    "id": 10,
    "question": "What is H2O commonly known as?",
    "options": [
      "Hydrogen",
      "Water",
      "Oxygen",
      "Salt"
    ],
    "answer": "Water"
  }
]
const PER_QUESTION_SECONDS = 5;
let currentQuestion = 0;
let score = 0;
let timer;

document.addEventListener("DOMContentLoaded", ()=>{
    showPage("home");
});

function showPage(pageId){
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if(page){
        page.classList.add('active');
    }
}

function startQuiz(){
    currentQuestion = 0;
    score = 0;
    showPage('quiz');
    showQuestion();
}

function showQuestion() {
  const q = data[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${data.length}`;

  startTimer();
}
function startTimer() {
  let timeLeft = PER_QUESTION_SECONDS; 
  const timerDiv = document.getElementById("timer");
  timerDiv.textContent = `Time: ${timeLeft}`;

  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `Time: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null);
    }
  }, 1000);
}


function checkAnswer(selected) {
  const q = data[currentQuestion];
  const feedback = document.getElementById("feedback");

  if (selected === q.answer) {
    score++;
    feedback.textContent = "Correct!";
    feedback.className = "correct";
  } else {
    feedback.textContent = `Incorrect! Correct answer: ${q.answer}`;
    feedback.className = "incorrect";
  }

  clearInterval(timer);

  setTimeout(() => {
    feedback.textContent = "";
    currentQuestion++;
    if (currentQuestion < data.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
}


function endQuiz() {
  showPage("score-screen");
  const percentage = Math.round((score / data.length) * 100);
  document.getElementById("final-score").textContent =
    `You scored ${percentage}%`;

  if (percentage > 80) {
    document.getElementById("confetti").textContent="🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊";
  }

  const highScore = localStorage.getItem("highScore") || 0;
  if (percentage > highScore) {
    localStorage.setItem("highScore", percentage);
  }
}

function showHighestScore(){
    let highestScore = localStorage.getItem("highScore");
    document.getElementById("highest-score").textContent = highestScore;
}

document.getElementById("restartBtn").addEventListener("click", () => {
  showPage("home");
});