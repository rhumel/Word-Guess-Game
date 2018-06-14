var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordBank = ["sofa","sunglasses", "lotion", "sunscreen", "beach", "water", "sand","book", "pencil","ruler","plant","grandma", "picture", "drum", "chair", "wood", "carpet", "fireplace", "jar", "trophy", "candle", "treasure", "glitter", "paper", "spray", "dishes", "broom", "soap", "camera", "speaker", "rainbow", "twilight", "star", "moon", "pies", "cake", "diamonds", "butterflies","caterpiller","tree","driveway", "front", "family","hotel", "vacation", "shoe", "pool", "table", "fabric", "medicine", "commercial","automobile", "truck", "bandage","hospital","strecher", "doctor", "nurse", "sick","blanket", "studio", "loan", "lion", "tiger", "bear", "computer", "javascript", "frame", "billboard","interview", "blind", "landscape", "pregnant", "cabinet", "drawer", "pumpkin","investigation","boat","graze", "tractor", "trailer", "sailor", "microwave", "centipede", "nerve", "surgery", "laser", "institute", "download", "beautiful", "truth", "moment", "record", "cracked", "interrogation", "invasion"]
var word ;              // Selected word
var guess ;             // Geuss
var guessedLetters = [ ]; // Stored geusses array
var lives = 6 ;             // Lives
var counter = 0 ;           // Count correct guesses
var spaces;              // Number of spaces in word '-'
var wrongLetters = [];   //wrong guess 
var wins = 0 ;             //wins
var losses = 0 ;           //loses 

//Select random word from word bank

var word = wordBank[Math.floor(Math.random()*wordBank.length)];
console.log(word);

//get the length of word
var spaces = word.length;
console.log(spaces);

//create "_" blanks 
for (var i =0; i <word.length; i++) {
    guessedLetters.push("_");
    
}
console.log(guessedLetters);

//collect guess from user

var guess = document.getElementById("letterTxt") 
    document.onkeyup=function(event) {
        guess = guess.toLowerCase();
        console.log(guess); 
}



for (var i = 1; i <= word.length; i++) {
  if (word.atChar[i] === guess) {
      var x= (i - 1);
      guessedLetters.push[x];
      var counter = (counter + 1);
      if (counter === word.length) {
        var wins = wins +1;
        //print "You Win!!"
        //reset function   
      } else {     
        //print to input field the Array
        //print "great, keep going"
      }
  } else {
    var x= (i - 1);     
    wrongLetters.push[x];
    
    // 
}


//}

