function showHighScores() {
    var scores = JSON.parse(window.localStorage.getItem('scores')) || []; //stores scores (empty array if no scores available)
    console.log(); 
    // Google sorting of the high scores in an array, create sort function here

    scores.forEach(function(score) {
        // append li for every score
    });
}



showHighScores();