var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordBank = ["sofa","sunglasses", "lotion", "sunscreen", "beach", "water", "sand","book", "pencil","ruler","plant","grandma", "picture", "drum", "chair", "wood", "carpet", "fireplace", "jar", "trophy", "candle", "treasure", "glitter", "paper", "spray", "dishes", "broom", "soap", "camera", "speaker", "rainbow", "twilight", "star", "moon", "pies", "cake", "diamonds", "butterflies","caterpiller","tree","driveway", "front", "family","hotel", "vacation", "shoe", "pool", "table", "fabric", "medicine", "commercial","automobile", "truck", "bandage","hospital","strecher", "doctor", "nurse", "sick","blanket", "studio", "loan", "lion", "tiger", "bear", "computer", "javascript", "frame", "billboard","interview", "blind", "landscape", "pregnant", "cabinet", "drawer", "pumpkin","investigation","boat","graze", "tractor", "trailer", "sailor", "microwave", "centipede", "nerve", "surgery", "laser", "institute", "download", "beautiful", "truth", "moment", "record", "cracked", "interrogation", "invasion"]
var word ;              // Selected word
var guess ;             // Geuss
var guessedLetters = [ ]; // Stored geusses array
var lives ;             // Lives
var counter ;           // Count correct guesses
var spaces;              // Number of spaces in word '-'

//Select random word from word bank

var word = wordBank[Math.floor(Math.random()*wordBank.length)];
console.log(word);

//get the length of word
var spaces = word.length;
console.log(spaces);

//create "_" blanks 


//collect guess from user

var guess = document.getElementById("letterTxt") 
    document.onkeyup=function(event) {
        console.log(guess); 
}

    

