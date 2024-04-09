const highScoreList = document.getElementById('hidhScoresList');
const highScores = JSON.parse(localStorage.getItem('highScore')) || [];

highScoreList.innerHTML = highScores.map( score => {
    return(`<li class="high-Score">${score.name} - ${score.score}</li>`);
}).join("");

