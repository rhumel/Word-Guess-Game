var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordBank = ["sofa", "sunglasses", "lotion", "sunscreen", "beach", "water", "sand", "book", "pencil", "ruler", "plant", "grandma", "picture", "drum", "chair", "wood", "carpet", "fireplace", "jar", "trophy", "candle", "treasure", "glitter", "paper", "spray", "dishes", "broom", "soap", "camera", "speaker", "rainbow", "twilight", "star", "moon", "pies", "cake", "diamonds", "butterflies", "caterpiller", "tree", "driveway", "front", "family", "hotel", "vacation", "shoe", "pool", "table", "fabric", "medicine", "commercial", "automobile", "truck", "bandage", "hospital", "strecher", "doctor", "nurse", "sick", "blanket", "studio", "loan", "lion", "tiger", "bear", "computer", "javascript", "frame", "billboard", "interview", "blind", "landscape", "pregnant", "cabinet", "drawer", "pumpkin", "investigation", "boat", "graze", "tractor", "trailer", "sailor", "microwave", "centipede", "nerve", "surgery", "laser", "institute", "download", "beautiful", "truth", "moment", "record", "cracked", "interrogation", "invasion"]
var word = "";              // Selected word
var guess;             // Geuss
var guessedLetters = []; // Stored geusses array
var lives = 6;             // Lives
var counter = 0;           // Count correct guesses
var spaces;              // Number of spaces in word '-'
var wrongLetters = [];   //wrong guess 
var wins = 0;             //wins
var losses = 0;           //loses 
var letterExist = false;  //check to see 
var lastWord = "";
var wrongLetterIndex ;

//Select random word from word bank

function resestGame() {
    // Set aside previous word
    lastWord = word;
    //random word
    word = wordBank[Math.floor(Math.random() * wordBank.length)];

    //reset counter
    lives = 6;
    counter = 0;
    guessedLetters = []
    wrongLetters = []

    //create "_" blanks 
    for (var i = 0; i < word.length; i++) {
        guessedLetters.push("_");
    }

    // prints the counters to the screen    
    renderHtml();
}

resestGame();




//collect guess from user and make it lower case

var guess;
document.onkeyup = function (event) {
    guess = event.key.toLowerCase();

    for (var i = 0; i <= word.length - 1; i++) {

        if (word.charAt(i) === guess) {
            guessedLetters[i] = guess;
            counter++;
            letterExist = true;

        }
    }



  if (letterExist === true) {
      letterExist = false;
      renderHtml();
    } else {
     //verify if the letter haas been used
      wrongLetterIndex = (wrongLetters.indexOf(guess));
        if (wrongLetterIndex === (-1)) {
            wrongLetters.push(guess);
            lives--;  
            renderHtml();  
       } else {
          alert("You have already tried "+ guess);
        }
    }


    if (counter === word.length) {
        wins++;
        resestGame();

    }
    if (lives === 0) {

        losses++;
        resestGame();

    }

}
function renderHtml() {
    document.getElementById("livesTxt").innerHTML = (lives);
    document.getElementById("winTxt").innerHTML = (wins);
    document.getElementById("lossesTxt").innerHTML = (losses);
    document.getElementById("wordTxt").innerHTML = (guessedLetters.join(" "));
    document.getElementById("wrongTxt").innerHTML = (wrongLetters.join(" "));
    document.getElementById("lastWordTxt").innerHTML = (lastWord);

}



