$(document).ready(function() {
    let $time = $('.time');
    let $button = $('button');
    let $word = $('.words');
    let $score = $('.score');
    let points = 0;
    let seconds = 60;
    let lettersMatched = 0;
    let currentWord;
    let wordArray;
    let timer;

    function startCountdown() {
        points = 0;
        $button.prop('disabled', true);
        $word.text("");
        timer = setInterval(function(){
            seconds--;
            $time.text(seconds);
            if (seconds === 0) {
                resetGame();
            }
        }, 1000);
    }

    function getRandomWord() {
        $word.text("");
        let random = Math.floor(Math.random() * list.length);
        currentWord = list[random];
        wordArray = currentWord.split("");
        for (let letter of wordArray) {
            $word.append(`<span>${letter}</span>`);
        }
        $word.fadeIn('fast');
    }

    function typingComparison(e) {
        let typedValue = String.fromCharCode(e.which);
        if (typedValue === wordArray[0]) {
            $word.find('span').eq(lettersMatched).addClass('bg');
            lettersMatched++;
            wordArray.shift();
            checkWordComplete();
        }
    }

    function setTypingEvent() {
        $(document).on('keydown', typingComparison)
    }

    function checkWordComplete() {
        if (currentWord.length === lettersMatched) {
            points++;
            $score.text(points);
            lettersMatched = 0;
            $word.fadeOut('fast');
            setTimeout(function() {
                getRandomWord();
            }, 400);
        }
    }

    function resetGame() {
        $button.prop("disabled", false);
        $word.html("").append(`<h1> Game Over. You correctly typed ${points} words! Play Again`);
        clearInterval(timer);
        seconds = 60;
        points = 0;
        lettersMatched = 0;
        $time.text(seconds);
        $score.text("0");
        $(document).off('keydown');
    }

    $('button').click(function(){
        startCountdown();
        getRandomWord();
        setTypingEvent();
    });
});