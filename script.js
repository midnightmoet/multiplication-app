const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("resetBtn");

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", (e) => {
    const userAnswer = inputEl.value;
    if (userAnswer == correctAnswer) {
        score++;
        alert("Correct!");
        updateLocalStorage();
    } else {
        score--;
        alert(`Wrong! The correct answer is ${correctAnswer}`);
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

resetBtn.addEventListener("click", () => {
    window.location.reload();
});