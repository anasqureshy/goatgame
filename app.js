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

totalScores = [];
roundScore = 0;
activePlayer = '0';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
diceDOM =document.querySelector('.dice'); 
diceDOM.style.display = 'none';

//Event Listener with Anonymous function as 2nd param
document.querySelector('.btn-roll').addEventListener('click', function(){

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




});

document.querySelector('.btn-hold').addEventListener('click', hold);

function hold(){

    totalScores[activePlayer] = roundScore;

    document.getElementById('score-' + activePlayer).textContent = totalScores[activePlayer];

    nextPlayer();
}

function nextPlayer(){
    //Next Player
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';

}