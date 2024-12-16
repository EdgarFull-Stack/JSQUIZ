import { questions } from "./questions.js";
import { renderQuestion, updateProgress, showFinalScore } from "./dom.js";

let currentQuestionIndex = 0;
let score = 0;

function handleAnswer(selectedIndex, button) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll("#choices-container button");

  buttons.forEach((btn) => (btn.disabled = true));
  if (selectedIndex === currentQuestion.correctAnswerIndex) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }
}

function loadNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion(questions[currentQuestionIndex], handleAnswer);
    updateProgress(currentQuestionIndex + 1, questions.length);
    updateNextButtonText();
  } else {
    showFinalScore(score, questions.length);
  }
}

function updateNextButtonText() {
  const nextButton = document.getElementById("next-button");
  if (currentQuestionIndex === questions.length - 1) {
    nextButton.textContent = "View Results";
  } else {
    nextButton.textContent = "Next";
  }
}

document.getElementById("next-button").addEventListener("click", () => {
  loadNextQuestion();
});

// start quiz
renderQuestion(questions[currentQuestionIndex], handleAnswer);
updateProgress(currentQuestionIndex + 1, questions.length);
updateNextButtonText();
