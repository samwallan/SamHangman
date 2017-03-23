
//test
    var wordlist = ["Will Arnett", "Justin Timberlake", "Jon Stewart", "Justin Beiber", "Stephen Colbert", "Christiano Ronaldo", "Beyonce", "Taylor Swift", "Jimmy Fallon", "Sam Wallan", "Jason Bateman", "Jason Sudeikis", "Tom Hanks", "Tom Cruise", "Kanye West", "Kim Kardashian", "Sarah Palin", "Rudy Giuliani", "Ted Cruz", "Mitt Romney", "Marco Rubio", "Jeb Bush", "Billy Bush", "Reince Priebus", "John F Kennedy", "Melania Trump", "Barron Trump", "Ken Bone", "Joe Biden", "Jason Chaffetz", "Eric Trump", "Evan McMullin", "Hillary Clinton", "Donald Trump", "Rand Paul", "Paul Ryan", "Steve Bannon", "Kellyanne Conway", "Mike Pence", "Tim Kaine", "Bill Clinton", "Barack Obama"];
//var wordlist = ["Donald Trump"]
//random number generator
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    $(document).ready(function () {
        $('html').addClass("backg")
    });

    var randonum = getRandomArbitrary(0, wordlist.length - 1);
    var word = wordlist[randonum];

    console.log("Word:", "'" + word + "',", "Location:", randonum);

//turns the string into an array of letters
    var letterArray = word.split('');
    console.log(letterArray);
    var blankLetter = "";
    var blankLetterarr = [];

//goes through the list of letters from the array and creates a string with '_' if there is a letter and a space for a space
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i] !== " ") {
            blankLetter = blankLetter + "_ "
        } else if (letterArray[i] === " ") {
            blankLetter = blankLetter + "&nbsp;&nbsp;"
        }
    }
    console.log(blankLetter);


//goes through the list of letters and creates an array with the blank letters, same as above
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i] !== " ") {
            blankLetterarr[i] = " _ "
        } else if (letterArray[i] === " ") {
            blankLetterarr[i] = "&nbsp;&nbsp;"
        }
    }

    console.log(blankLetterarr)

// the button that automatically gets clicked when the browser loads to show the word length
function wordChoose() {
    document.getElementById("output").innerHTML = blankLetter;
    lifeCount()
    //  document.getElementById("button1").style.visibility = "hidden";

}

// After the guess letter feild receives an imput
function letterGuess() {
    var variable = 0
    var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i=0;i<alph.length;i++){
        if(document.getElementById('letterImput').value.toLowerCase() === alph[i] && !(document.getElementById('letterImput').value === " ")){
            variable = 1
        }
    }
    if(variable == 0){
        document.getElementById('letterImput').value = ''
    }

    if (variable == 1) {
        var mostRecentLetter = document.getElementById('letterImput').value;
        var count = 0;
        // check to see if the letter is part of the name
        for (var i = 0; i < letterArray.length; i++) {
            if (mostRecentLetter.toLowerCase() === letterArray[i].toLowerCase()) {
                blankLetterarr[i] = mostRecentLetter.toUpperCase();
                count = 1
            }
        }
        // checks to see if the letter has already been used
        function checkifused() {

            for (var i = 0; i < usedarr.length; i++) {
                if (mostRecentLetter.toUpperCase() === usedarr[i]) {
                    count = 1
                }
            }

        };
        checkifused();

        // checks to see if the letter was a correct guess and if a life needs to be subtracted
        if (count === 0) {
            lifeCount()
            alreadyUsed(mostRecentLetter)
            $('output').append('Guess AGain!')
        }
        var blankletterstr = blankLetterarr.join(" ");

        document.getElementById("output").innerHTML = blankletterstr;

        var count = 0;

        //checks to see if there are still underscores in the string, if there are none left then the count s left @ 0
        for (i = 0; i < blankletterstr.length; i++) {
            if (blankletterstr.charAt(i) === "_") {
                count = count + 1
            }
        }
        if (count === 0) {
            win()
        }
        document.getElementById("output3").innerHTML = ""
        document.getElementById('letterImput').value = ''


    } else if (document.getElementById('letterImput').value === " ") {
        document.getElementById('letterImput').value = ""
    }
}

//when a player wants to guess a word
function wordGuess() {
    var wordguess = document.getElementById('wordImput').value;
    if (wordguess.toLowerCase() === word.toLowerCase()) {
        win()
    } else {
        document.getElementById("output3").innerHTML = "WRONG! Keep on guessing."
        lifeCount()
    }
}

var lifecount = 8;

//keeps track of how many lives the player has left
function lifeCount() {
    lifecount = lifecount - 1
    document.getElementById("output1").innerHTML = "Lives left: " + lifecount + "/7"

    if (lifecount < 1) {
        lose()
    }
}

//the array of used letters and a function to check if the letter has already been used
var usedarr = [];

function alreadyUsed(char) {
    usedarr.push(char.toUpperCase());
    document.getElementById("output2").innerHTML = "Letters Already Guessed: " + usedarr.join(", ")
}

function win(){
    document.getElementById("output").innerHTML = "You got it! The Person Was: " + word;
    $('html').addClass('goodjob');
    document.getElementById("button1").style.visibility = "visable";
    document.getElementById("tr").style.display = "none";
    document.getElementById("output3").innerHTML = ""
}

function lose(){
    document.getElementById("output1").innerHTML = "You're out of lives, and you lose. The Person Was: " + word
    document.getElementById("tr").style.display = "none";
    document.getElementById("button1").style.visibility = "visable";
    $('html').addClass('yes');

    $('html')
        .addClass('red')
        .removeClass('backg')
        .delay(400)
        .removeClass('red');


}
