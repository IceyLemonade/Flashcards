const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What color is the sky?", answer: "Blue" }
];

let current = 0;

const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const showAnswerBtn = document.getElementById('showAnswer');
const nextCardBtn = document.getElementById('nextCard');
const addCardForm = document.getElementById('addCardForm');
const newQuestion = document.getElementById('newQuestion');
const newAnswer = document.getElementById('newAnswer');

function showCard(index) {
    questionDiv.textContent = flashcards[index].question;
    answerDiv.textContent = flashcards[index].answer;
    answerDiv.style.display = 'none';
}

showCard(current);

showAnswerBtn.addEventListener('click', () => {
    answerDiv.style.display = 'block';
});

nextCardBtn.addEventListener('click', () => {
    current = (current + 1) % flashcards.length;
    showCard(current);
});

addCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = newQuestion.value.trim();
    const a = newAnswer.value.trim();
    if (q && a) {
        flashcards.push({ question: q, answer: a });
        newQuestion.value = '';
        newAnswer.value = '';
        current = flashcards.length - 1;
        showCard(current);
    }
});
