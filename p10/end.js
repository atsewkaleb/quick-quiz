const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
})
console.log(highScores);
saveHighScore = e => {
    console.log("I Clicked the save button");
    e.preventDefault(); 


    const score={
        //score: Math.floor(Math.random()*100),
        score: mostRecentScore,
        name:username.value
    };
    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem("highScore", JSON.stringify(highScores));

    console.log(highScores);
   window.location.assign("/");
   
}