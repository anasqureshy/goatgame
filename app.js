//Dev: Anas Asif
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var totalScores, roundScore, activePlayer, dice1, dice2, diceTotal, targetScore;
var gameOn, targetSet;
diceDOM =document.getElementsByClassName('dice'); 

init();

//Event Listener with Anonymous function as 2nd param
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(targetSet){
        gameOn = true;
    } else {
        alert('Set winning score first, to begin!');
    }
    
    
    if(gameOn){
    //1. Random Number
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1 + " " + dice2)
    //2. Display Result
    diceDOM[0].style.display = 'block';
    diceDOM[0].src = 'dice-'+ dice1 + '.png';

    diceDOM[1].style.display = 'block';
    diceDOM[1].src = 'dice-'+ dice2 + '.png';
    //3. Update the score if rolled number is not 1
    
    if(dice1 !== 1 && dice2 !== 1){
    diceTotal = dice1 + dice2
    roundScore += diceTotal;
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
    if(totalScores[activePlayer] >= targetScore){
        gameOn = false;       
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!'
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        
        for(var i =0; i<diceDOM.length; i++){
        diceDOM[i].style.display = 'none'; }
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
    
    for(var i =0; i<diceDOM.length; i++){
        diceDOM[i].style.display = 'none'; }
    }
}

document.querySelector('.btn-new').addEventListener('click', init);


function init(){

totalScores = [0,0];
roundScore = 0;
activePlayer = '0';
gameOn = false;
targetSet = false;
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
toggleSet();
document.querySelector('.custom_button').classList.add('animate')

for(var i = 0; i<diceDOM.length; i++){
diceDOM[i].style.display = 'none';}

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

}


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
//Coding Challenge 6

//Point Number 2
document.querySelector('.custom_button').addEventListener('click', function() {

    targetScore =  document.getElementById('target').value;

    if(isNaN(targetScore)) {
        alert("Enter valid number with value more than 20");
    } else if (targetScore < 20) {
        alert("Enter valid number with value more than 20");
    } else {

    targetSet = true;
    gameOn = true;
    
    toggleSet();
}
});

function toggleSet() {
    document.querySelector('.custom_button').classList.remove('animate');
    document.getElementById('target').classList.toggle('disabled');
    document.querySelector('.custom_button').classList.toggle('disabled');
}