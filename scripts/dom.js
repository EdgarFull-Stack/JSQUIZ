export function renderQuestion(question, onSelect) {
  const questionText = document.getElementById("question-text");
  const choicesContainer = document.getElementById("choices-container");

  questionText.textContent = question.question;
  choicesContainer.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => onSelect(index));
    choicesContainer.appendChild(button);
  });
}

export function updateProgress(current, total) {
  const progressIndicator = document.getElementById("progress-indicator");
  progressIndicator.textContent = `Question ${current} of ${total}`;
}

export function showFinalScore(score, total) {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>You scored ${score} out of ${total}.</p>
      <button id="restart-button">Restart</button>
    `;
  document
    .getElementById("restart-button")
    .addEventListener("click", () => location.reload());
}
