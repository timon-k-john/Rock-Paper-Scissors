let score = JSON.parse(localStorage.getItem('score')) || {
    player: 0,
    computer: 0,
    tie: 0
};

updatescore();

function check(user) {
const num = Math.random();
let result = '';
let comp = '';

if (num >= 0 && num < 1/3){
    comp = 'rock';
    if (user === 'rock'){
        result = 'Draw';
        score.tie += 1;
    }
    else if (user === 'paper'){
        result = 'You Win';
        score.player += 1;
    }
    else if (user === 'scissors'){
        result = 'You Lose';
        score.computer += 1;
    }
    
} else if (num >= 1/3 && num < 2/3){
    comp = 'paper';
    if (user === 'rock'){
        result = 'You Lose';
        score.computer += 1;
    }
    else if (user === 'paper'){
        result = 'Draw';
        score.tie += 1;
    }
    else if (user === 'scissors'){
        result = 'You Win';
        score.player += 1;
    }
}else if (num >= 2/3 && num < 1){
    comp = 'scissors';
    if (user === 'rock'){
        result = 'You Win';
        score.player += 1;
    }
    else if (user === 'paper'){
        result = 'You Lose';
        score.computer += 1;
    }
    else if (user === 'scissors'){
        result = 'Draw';
        score.tie += 1;
    }
}
movePlayed(user, comp);

localStorage.setItem('score', JSON.stringify(score));
updatescore();

document.querySelector('.js-result')
    .innerHTML = result;

}
function resetmoves() {
document.querySelector('.js-user-move')
    .innerHTML = `You : <img src="assets/blank.png" class="move-icon">`;
document.querySelector('.js-comp-move')
    .innerHTML = `Computer : <img src="assets/blank.png" class="move-icon"> `;
}
function updatescore() {
document.querySelector('.js-win')
    .innerHTML = `Wins : ${score.player}`;
document.querySelector('.js-lose')
    .innerHTML = `Losses : ${score.computer}`;
document.querySelector('.js-draw')
    .innerHTML = `Draw : ${score.tie}`;
}
function movePlayed(u, c){
document.querySelector('.js-user-move')
    .innerHTML = `You : <img src="assets/${u}-emoji.png" class="move-icon">`;
document.querySelector('.js-comp-move')
    .innerHTML = `Computer : <img src="assets/${c}-emoji.png" class="move-icon">`;

}