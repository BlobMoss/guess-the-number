const score = document.getElementById('highScore');
const message = document.getElementById('message');
const inputField = document.getElementById('user-input');
const guesses = document.getElementById('guesses');

let difficulty = 100;
let highscore = 0;
let history;
let currentScore;
let theNumber;

setMessage(`Guess a number between 0 and ${difficulty}!`)
restart();

function restart(){
    history = [];
    currentScore = 0;
    theNumber = randomInt(difficulty);
}

document.addEventListener("keyup", function(event){
    if (event.key == 'Enter'){
        currentScore++;
        let guess = getUserInput();
        let color;
        
        clearInput();

        if (guess < theNumber){
            setMessage('Too Low!');
            color = 'red';
        } else if (guess > theNumber){
            setMessage('Too High!');
            color = 'green';
        }else{
            setMessage('You Win!');
            updateScore();
            restart();
            return;
        }
        
        updateHistory(`<span style = "color: ${color}">${guess}</span>`);
    }
})

function getUserInput(){
    return parseInt(inputField.value);
}
function setMessage(msg){
    message.innerHTML = msg;
}   
function clearInput(){
    inputField.value = '';
}
function updateScore(){
    if (currentScore < highscore){
        highscore = currentScore;
    }
    score.innerHTML = "highscore: " + highscore;
}
function updateHistory(element){
    history.unshift(element); 
    guesses.innerHTML = history.join('<br>');
}
function randomInt(max){
    return Math.floor(Math.random() * (max + 1));
}