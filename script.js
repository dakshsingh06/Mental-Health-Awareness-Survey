let questions = [
  "Q.1 I often feel anxious or worried.",
  "Q.2 I have trouble sleeping at night.",
  "Q.3 I feel overwhelmed by my daily tasks.",
  "Q.4 I have lost interest in activities I used to enjoy.",
  "Q.5 I feel like I'm a burden to others.",
  "Q.6 I have trouble concentrating.",
  "Q.7 I feel like I'm not good enough.",
  "Q.8 I have thoughts of self-harm.",
  "Q.9 I feel like I'm stuck in a rut.",
  "Q.10 I have trouble making decisions.",
  "Q.11 I feel like I'm not in control of my life.",
  "Q.12 I have feelings of hopelessness.",
  "Q.13 I have trouble with my appetite.",
  "Q.14 I feel like I'm not good enough.",
  "Q.15 I have thoughts of suicide."
];

let options = [
  {value: -3, text: "Highly Agreed"},
  {value: -2, text: "Agreed"},
  {value: 1, text: "Neither"},
  {value: 2, text: "Disagree"},
  {value: 3, text: "Highly Disagreed"}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  optionsEl.innerHTML = ""; // Clear the options element
  questionEl.textContent = questions[currentQuestion];
  options.forEach(option => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = option.value;
      li.appendChild(input);
      li.appendChild(document.createTextNode(option.text));
      optionsEl.appendChild(li);
  });
}

function updateScore() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
      score += parseInt(selectedOption.value);
  }
}

showQuestion();

nextBtn.addEventListener("click", () => {
  updateScore();
  currentQuestion++;
  if (currentQuestion >= questions.length) {
      showResult();
  } else {
      showQuestion();
  }
});

backBtn.addEventListener("click", () => {
  updateScore();
  currentQuestion--;
  if (currentQuestion < 0) {
      currentQuestion = 0;
  }
  showQuestion();
});

function showResult() {
  let message = "";
  if (score >= -15 && score < -5) {
      message = "You are severely depressed.";
  } else if (score >= -5 && score < 5) {
      message = "You are moderately depressed.";
  } else if (score >= 5 && score < 15) {
      message = "You are little stressed.";
  } else {
      message = "You are doing fine.";
  }
  resultEl.textContent = message;
  resultEl.style.animation = "fadeIn 1s";
}
