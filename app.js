//Dev: Anas Asif
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var totalScores, roundScore, activePlayer, dice;
var gameOn;
diceDOM =document.querySelector('.dice'); 

init();

//Event Listener with Anonymous function as 2nd param
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameOn){
    //1. Random Number
    dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display Result
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';

    //3. Update the score if rolled number is not 1
    
    if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
    nextPlayer();
    }
}




});

document.querySelector('.btn-hold').addEventListener('click', hold);

function hold(){
    if(gameOn){
    totalScores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = totalScores[activePlayer];

    //Check if the player won the game
    if(totalScores[activePlayer] >= 20){
        gameOn = false;       
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!'
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        diceDOM.style.display = 'none'; 
    } else{
    nextPlayer();
    }
}
}

function nextPlayer(){
    //Next Player
    if(gameOn){
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';
    }
}

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
totalScores = [0,0];
roundScore = 0;
activePlayer = '0';
gameOn = true;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
diceDOM.style.display = 'none';

document.getElementById('name-0').textContent = 'Player 1'
document.getElementById('name-1').textContent = 'Player 2'
}