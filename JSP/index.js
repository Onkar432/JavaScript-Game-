const choices = ['snake', 'water', 'gun'];
let score = 0;
const buttons = document.querySelectorAll('button');
const scoreSpan = document.getElementById('score');
const resultP = document.getElementById('result');
const computerChoiceP = document.getElementById('computer-choice');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;  //Player's Choice
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceP.innerHTML = `Computer chose ${computerChoice}`;
        if (playerChoice === computerChoice) {
            resultP.innerHTML = 'Tie!';
        }
        else if (playerChoice === 'snake' && computerChoice === 'water' ||
            playerChoice === 'water' && computerChoice === 'gun' ||
            playerChoice === 'gun' && computerChoice === 'snake') {
            resultP.innerHTML = 'You win!';
            score++;
        } else {
            resultP.innerHTML = 'You lose!';
            score--;
        }
        scoreSpan.innerHTML = score;
    });
});
