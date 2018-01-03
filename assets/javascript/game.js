    var computerChoice = ["a","b","c","d","e","f","g","h","I","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    var guesses = 10;  

    document.onkeyup = function(event) {
      var userGuess = event.key;
      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

      if (userGuess === computerGuess) {
        wins++;
      }else{
        guesses--;
      }
      if (guesses === 0) {
        losses++
      }
      if (guesses === -1) {
        guesses = 10;
      }
  
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
  }

