// javascript program for hangman
// Nikki Aaron
// 11/5/17


// starting phrase options and alphabet
var allPhrases = ['CATCH SOME RAYS', 'HANG TEN', 'WALK ALONG THE SHORE', 'CRASHING WAVES', 'SEAFOAM GREEN', 'CONCH SHELL', 'NAUTILUS SHELL', 'BIKINIS AND TRUNKS', 'BUILD A SANDCASTLE', 'APPLY SUNSCREEN', 'WEAR YOUR FLIP-FLOPS', 'SCUBA WITH SHARKS', 'GROOVY MUSIC', 'BOARDWALK FISHING'];

var unguessed = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var guessed = [];
var imgMarginInit = 0;

//generates a random phrase from allPhrases
var random = Math.floor(Math.random()*(allPhrases.length-1));
var phrase = allPhrases[random];


//start with 6 "lives" or attempts
//lose one attempt for each incorrect guess
var attemptsRem = 6;

window.onload = phraseGen();

function phraseGen() {
    //replaces unguessed letters in phrase with blanks
    var phraseDisp = phrase;
    for (var i = 0; i < phrase.length; i++) {
        for (var j = 0; j < unguessed.length; j++) {
            if (phrase.charAt(i) == unguessed[j]) {
                phraseDisp = phraseDisp.replace(phraseDisp.charAt(i),'_');
            }
        }
    }
    //displays resulting phraseDisp in HTML along with other initial vars
    document.getElementById('phraseDisp').innerHTML = phraseDisp;
    document.getElementById('attemptsRem').innerHTML = attemptsRem;
    document.getElementById('guessed').innerHTML = guessed.join(', ');
    document.getElementById('unguessed').innerHTML = unguessed.join(', ');
}

//executes upon keyup within input form
function validateLetter() {
    var textInput = document.getElementById("newLetter").value;
    textInput = textInput.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
    document.getElementById("newLetter").value = textInput;
}

//executes upon click of form submit button
function newGuess() {
    var newLetter = document.getElementById("newLetter").value;
    const index1 = unguessed.indexOf(newLetter);
    const index2 = guessed.indexOf(newLetter);
    const index3 = phrase.indexOf(newLetter);
    if (index1 !== -1 && index2 == -1) {
        unguessed.splice(index1,1);
        guessed.push(newLetter);
        if (index3 == -1) {
            attemptsRem = attemptsRem - 1;
            document.getElementById("hangman-img").style.marginLeft = "-" + (imgMarginInit + ((6 - attemptsRem)*100)) + "%";
        }
    }
    document.getElementById("newLetter").value = "";
    phraseGen();
}

function imgFrame() {

}

