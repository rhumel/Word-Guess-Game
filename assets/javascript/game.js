var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordBank = ["sofa", "sunglasses", "lotion", "sunscreen", "beach", "water", "sand", "book", "pencil", "ruler", "plant", "grandma", "picture", "drum", "chair", "wood", "carpet", "fireplace", "jar", "trophy", "candle", "treasure", "glitter", "paper", "spray", "dishes", "broom", "soap", "camera", "speaker", "rainbow", "twilight", "star", "moon", "pies", "cake", "diamonds", "butterflies", "caterpiller", "tree", "driveway", "front", "family", "hotel", "vacation", "shoe", "pool", "table", "fabric", "medicine", "commercial", "automobile", "truck", "bandage", "hospital", "strecher", "doctor", "nurse", "sick", "blanket", "studio", "loan", "lion", "tiger", "bear", "computer", "javascript", "frame", "billboard", "interview", "blind", "landscape", "pregnant", "cabinet", "drawer", "pumpkin", "investigation", "boat", "graze", "tractor", "trailer", "sailor", "microwave", "centipede", "nerve", "surgery", "laser", "institute", "download", "beautiful", "truth", "moment", "record", "cracked", "interrogation", "invasion"]
var word;              // Selected word
var guess;             // Geuss
var guessedLetters = []; // Stored geusses array
var lives = 6;             // Lives
var counter = 0;           // Count correct guesses
var spaces;              // Number of spaces in word '-'
var wrongLetters = [];   //wrong guess 
var wins = 0;             //wins
var losses = 0;           //loses 
var letterExist = false;  //check to see 

//Select random word from word bank

function resestGame() {
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(word);

    //get the length of word
    //  spaces = word.length;
    //  console.log(spaces);
    lives = 6;
    counter = 0;
    guessedLetters = []
    wrongLetters = []

    //create "_" blanks 
    for (var i = 0; i < word.length; i++) {
        guessedLetters.push("_");

    }
    console.log(guessedLetters);

    renderHtml();
}

resestGame();




//collect guess from user and make it lower case

//var guess = document.getElementById("letterTxt")    
var guess;
document.onkeyup = function (event) {
    guess = event.key.toLowerCase();

    console.log("first guess " + guess);
    console.log(event);
    for (var i = 0; i <= word.length - 1; i++) {
        console.log("this is the index " + i);
        console.log("this is the guess " + guess);
        console.log("this is the word-char " + word.charAt(i));
        if (word.charAt(i) === guess) {
            guessedLetters[i] = guess;
            counter++;
            letterExist = true;


            console.log(counter);
        }
    }


    if (letterExist === true) {

        letterExist = false
        renderHtml();
        console.log("i just reset the letter exist to false");
    } else {
        lives--;
        wrongLetters.push(guess);
        console.log(wrongLetters);
        console.log(lives);
        renderHtml();
    }
    if (counter === word.length) {
        wins++;
        resestGame();
        //reset function

        console.log(wins);

    }
    if (lives === 0) {

        losses++;
        resestGame();
        //reset
    }

}
function renderHtml() {
    document.getElementById("livesTxt").innerHTML = (lives);
    document.getElementById("winTxt").innerHTML = (wins);
    document.getElementById("lossesTxt").innerHTML = (losses);
    document.getElementById("wordTxt").innerHTML = (guessedLetters.join(" "));
    document.getElementById("wrongTxt").innerHTML = (wrongLetters.join(" "));

}
document.getElementById("reset").addEventListener("click", resestGame)





           // do this outside of the loop
                                                                  //            if (counter === word.length) {
                                                                  //                var wins = wins +1;
        //print "You Win!!"
        //reset function   
 //        } else {     
//                                                                       //print to input field the Array
                                                        //                    //print "great, keep going
//                    console.log("didnt match");
                                                        //                if (lives>0)  {
                                                        //                       wrongLetters.push(guess);
                                                        //                    console.log(wrongLetters);
//                    lives= lives - 1;
//                } else {
//                Losses = losses + 1;
//                     console.log("added to losses");
//            }


//else {
       //     lives = lives - 1;
       //     wrongLetters.push(guess);
       //     console.log("wrong letter");
       //     console.log(lives);
       // }
//}

