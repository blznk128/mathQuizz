// determines the math problem
let divide1 = Math.floor((Math.random() * 11) +1);
let divide2 = Math.floor((Math.random() * 11) +1);
let divide3 = Math.floor((Math.random() * 11) +1);
let divide4 = Math.floor((Math.random() * 11) +1);
let divide5 = Math.floor((Math.random() * 11) +1);
let divide6 = Math.floor((Math.random() * 11) +1);
let divide7 = Math.floor((Math.random() * 11) +1);
let divide8 = Math.floor((Math.random() * 11) +1);
let divide9 = Math.floor((Math.random() * 11) +1);
let divide10 = Math.floor((Math.random() * 11) +1);
let divide11 = Math.floor((Math.random() * 11) +1);
let divide12 = Math.floor((Math.random() * 11) +1);
let divide13 = Math.floor((Math.random() * 11) +1);
let divide14 = Math.floor((Math.random() * 11) +1);
let divide15 = Math.floor((Math.random() * 11) +1);
let divide16 = Math.floor((Math.random() * 11) +1);
let divide17 = Math.floor((Math.random() * 11) +1);
let divide18 = Math.floor((Math.random() * 11) +1);
let divide19 = Math.floor((Math.random() * 11) +1);
let divide20 = Math.floor((Math.random() * 11) +1);


//sets the numbers to the screen
$('#divide').append(divide1 + " " + " / " + divide2 + " = " + "<input id = 'divideProblemOne'></input>");
$('#divide').append('<br>' + divide3 + " " + " / " + divide4 + " = " + "<input id = 'divideProblemTwo'></input>");
$('#divide').append('<br>' + divide5 + " " + " / " + divide6 + " = " + "<input id = 'divideProblemThree'></input>");
$('#divide').append('<br>' + divide7 + " " + " / " + divide8 + " = " + "<input id = 'divideProblemFour'></input>");
$('#divide').append('<br>' + divide9 + " " + " / " + divide10 + " = " + "<input id = 'divideProblemFive'></input>");
$('#divide').append('<br>' + divide11 + " " + " / " + divide12 + " = " + "<input id = 'divideProblemSix'></input>");
$('#divide').append('<br>' + divide13 + " " + " / " + divide14 + " = " + "<input id = 'divideProblemSeven'></input>");
$('#divide').append('<br>' + divide15 + " " + " / " + divide16 + " = " + "<input id = 'divideProblemEight'></input>");
$('#divide').append('<br>' + divide17 + " " + " / " + divide18 + " = " + "<input id = 'divideProblemNine'></input>");
$('#divide').append('<br>' + divide19 + " " + " / " + divide20 + " = " + "<input id = 'divideProblemTen'></input>");



//users clicks done, calculates Correct and Wrong answers
$('#divideDone').on('click', function() {
event.preventDefault();
let divideProblemOne = parseInt($('#divideProblemOne').val());
let divideProblemTwo = parseInt($('#divideProblemTwo').val());
let divideProblemThree = parseInt($('#divideProblemThree').val());
let divideProblemFour = parseInt($('#divideProblemFour').val());
let divideProblemFive = parseInt($('#divideProblemFive').val());
let divideProblemSix = parseInt($('#divideProblemSix').val());
let divideProblemSeven = parseInt($('#divideProblemSeven').val());
let divideProblemEight = parseInt($('#divideProblemEight').val());
let divideProblemNine = parseInt($('#divideProblemNine').val());
let divideProblemTen = parseInt($('#divideProblemTen').val());

let divideCorrect = 0;
let divideWrong = 0;

 if (divideProblemOne === divide1 / divide2) {
   divideCorrect ++
   
 } else if (divideProblemOne != divide1 / divide2){
  divideWrong ++
 }

 if (divideProblemTwo === divide3 / divide4) {
     divideCorrect ++
 } else if (divideProblemTwo != divide3 / divide4){
    divideWrong ++
 }

 if(divideProblemThree === divide5 / divide6) {
     divideCorrect++
 } else if (divideProblemThree != divide5 / divide6){
     divideWrong ++
 }

 if(divideProblemFour === divide7 / divide8) {
    divideCorrect++
} else if (divideProblemFour != divide7 / divide8){
    divideWrong ++
}

if(divideProblemFive === divide9 / divide10) {
    divideCorrect++
} else if (divideProblemFive != divide9 / divide10){
    divideWrong ++
}

if(divideProblemSix === divide11 / divide12) {
    divideCorrect++
} else if (divideProblemSix != divide11 / divide12){
    divideWrong ++
}

if(divideProblemSeven === divide13 / divide14) {
    divideCorrect++
} else if (divideProblemSeven != divide13 / divide14){
    divideWrong ++
}

if(divideProblemEight === divide15 / divide16) {
    divideCorrect++
} else if (divideProblemEight != divide15 / divide16){
    divideWrong ++
}

if(divideProblemNine === divide17 / divide18) {
    divideCorrect++
} else if (divideProblemNine != divide17 / divide18){
    divideWrong ++
}

if(divideProblemTen === divide19 / divide20) {
    divideCorrect++
} else if (divideProblemTen != divide19 / divide20){
    divideWrong ++
}


 $('#divideCorrect').text(divideCorrect)
 $('#divideWrong').text(divideWrong)
})