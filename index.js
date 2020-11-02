const score = document.getElementById('highScore');
const message = document.getElementById('message');
const inputField = document.getElementById('user-input');
const guesses = document.getElementById('guesses');

let difficulty = 100;
let highscore = 0;
let history;
let currentScore;
let theNumber;

SetMessage(`Guess a number between 0 and ${difficulty}!`)
Restart();

function Restart(){
    history = new Array(0);
    currentScore = 0;
    theNumber = RandomInt(difficulty);
}

document.addEventListener("keyup", function(event){
    if (event.key == 'Enter'){
        currentScore++;
        let guess = GetUserInput();
        let color;
        
        ClearInput();

        if (guess < theNumber){
            SetMessage('Too Low!');
            color = 'red';
        } else if (guess > theNumber){
            SetMessage('Too High!');
            color = 'green';
        }else{
            SetMessage('You Win!');
            UpdateScore();
            Restart();
            return;
        }
        
        UpdateHistory(`<span style = "color: ${color}">${guess}</span>`);
    }
})

function GetUserInput(){
    return parseInt(inputField.value);
}
function SetMessage(msg){
    message.innerHTML = msg;
}   
function ClearInput(){
    inputField.value = '';
}
function UpdateScore(){
    if (currentScore < highscore){
        highscore = currentScore;
    }
    score.innerHTML = highscore;
}
function UpdateHistory(element){
    history.unshift(element); 
    guesses.innerHTML = history.join('<br>');
}
function RandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}