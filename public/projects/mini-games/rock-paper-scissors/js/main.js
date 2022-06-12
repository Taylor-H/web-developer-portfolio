$(document).ready(function () {

    let computerPlay;
    let humanPlay;
    let resultMessage;
    let computerScore = 0;
    let humanScore = 0;

    $('#rock').click(function(){


        computerPlay = getComputerPlay();
        humanPlay = 'rock';



        if (computerPlay === 'scissors') {
            resultMessage = 'Human Won!';
            humanScore = humanScore + 1;
            $('#humanScore').text(humanScore);
            // humanScore += 1;
            // humanScore++

        } else if (computerPlay === 'paper') {
            resultMessage = 'Computer Won';
            computerScore = computerScore + 1;
            $('#computerScore').text(computerScore);
        } else {
            resultMessage = 'it\'s a tie :(';
        }

        $('#results').text('Result of the game is '+resultMessage);
    });

    $('#paper').click(function() {
        humanPlay = 'paper';
        computerPlay = getComputerPlay();

        $('#computer-play').text('Computer Played '+computerPlay);

        if (computerPlay === 'rock') {
            // Human Won!
            resultMessage = 'Human Won!';
            humanScore = humanScore + 1;
            $('#humanScore').text(humanScore);
        } else if (computerPlay === 'scissors') {
            // Computer Won
            resultMessage = 'Computer Won'
            computerScore = computerScore + 1;
            $('#computerScore').text(computerScore);
        } else {
            // It's a tie
            resultMessage = 'It\s a tie :(';
        }

        $('#results').text('Result of the game is '+resultMessage);
    });

    $('#scissors').click(function() {
        humanPlay = 'scissors';
        computerPlay = getComputerPlay();



       $('#computer-play').text('Computer Played '+computerPlay);

        if (computerPlay === 'paper') {
            // Human Won!
            resultMessage = 'Human Won!';
            humanScore = humanScore + 1;
            $('#humanScore').text(humanScore);
        } else if (computerPlay === 'rock') {
            // Computer Won
            resultMessage = 'Computer Won'
            computerScore = computerScore + 1;
            $('#computerScore').text(computerScore);
        } else {
            // It's a tie
            resultMessage = 'It\s a tie :(';
        }

        $('#results').text('Result of the game is '+resultMessage);
    });


    function getComputerPlay() {
      const plays = ['rock', 'paper', 'scissors'];
      const play = plays[Math.floor(Math.random() * plays.length)];
      return $('#computer-play').text('Computer played ' + play);
    }


    const startCount = (getComputerPlay) => {
      let count = 3;
      setInterval(function () {
        count--;
       count > 0 ? $('#count').text(count) : $('#count').text('GO!'), clearInterval(this);
      }, 1000);
        getComputerPlay();
    };



});
