// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [movieScores > 7];
var okMovieScores = [movieScores 5-7 ];
var badMovieScores = [<5];
for (var i  = 0; i < movieScores.length; i++) {
  var score = movieScore[i];
  sum+= score;

  if (score >  7) {
    goodMovieScores.push(score);
  }

  else if (score <= 7 && score > 5) {
    
  }
}