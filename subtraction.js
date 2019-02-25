// determines the math problems
let minus1 = Math.floor((Math.random() * 11) +1);
let minus2 = Math.floor((Math.random() * 11) +1);
let minus3 = Math.floor((Math.random() * 11) +1);
let minus4 = Math.floor((Math.random() * 11) +1);
let minus5 = Math.floor((Math.random() * 11) +1);
let minus6 = Math.floor((Math.random() * 11) +1);
let minus7 = Math.floor((Math.random() * 11) +1);
let minus8 = Math.floor((Math.random() * 11) +1);
let minus9 = Math.floor((Math.random() * 11) +1);
let minus10 = Math.floor((Math.random() * 11) +1);
let minus11 = Math.floor((Math.random() * 11) +1);
let minus12 = Math.floor((Math.random() * 11) +1);
let minus13 = Math.floor((Math.random() * 11) +1);
let minus14 = Math.floor((Math.random() * 11) +1);
let minus15 = Math.floor((Math.random() * 11) +1);
let minus16 = Math.floor((Math.random() * 11) +1);
let minus17 = Math.floor((Math.random() * 11) +1);
let minus18 = Math.floor((Math.random() * 11) +1);
let minus19 = Math.floor((Math.random() * 11) +1);
let minus20 = Math.floor((Math.random() * 11) +1);

//determines the answers
let minusTotal = minus1 - minus2;
let minusTotalTwo = minus3 - minus4;
let minusTotalThree = minus5 - minus6;
let minusTotalFour = minus7 - minus8;
let minusTotalFive = minus9 - minus10;
let minusTotalSix = minus11 - minus12;
let minusTotalSeven = minus13 - minus14;
let minusTotalEight = minus15 - minus16;
let minusTotalNine = minus17 - minus18;
let minusTotalTen = minus19 - minus20;

//sets the numbers to the screen
$('#subtraction').append(minus1 + " " + " - " + minus2 + " = " + "<input id = 'subtractionOne'></input>");
$('#subtraction').append('<br>' + minus3 + " " + " - " + minus4 + " = " + "<input id = 'subtractionTwo'></input>");
$('#subtraction').append('<br>' + minus5 + " " + " - " + minus6 + " = " + "<input id = 'subtractionThree'></input>");
$('#subtraction').append('<br>' + minus7 + " " + " - " + minus8 + " = " + "<input id = 'subtractionFour'></input>");
$('#subtraction').append('<br>' + minus9 + " " + " - " + minus10 + " = " + "<input id = 'subtractionFive'></input>");
$('#subtraction').append('<br>' + minus11 + " " + " - " + minus12 + " = " + "<input id = 'subtractionSix'></input>");
$('#subtraction').append('<br>' + minus13 + " " + " - " + minus14 + " = " + "<input id = 'subtractionSeven'></input>");
$('#subtraction').append('<br>' + minus15 + " " + " - " + minus16 + " = " + "<input id = 'subtractionEight'></input>");
$('#subtraction').append('<br>' + minus17 + " " + " - " + minus18 + " = " + "<input id = 'subtractionNine'></input>");
$('#subtraction').append('<br>' + minus19 + " " + " - " + minus20 + " = " + "<input id = 'subtractionTen'></input>");



//users clicks done, calculates Correct and Wrong answers
$('#subDone').on('click', function() {
event.preventDefault();
let subtractionOne = parseInt($('#subtractionOne').val());
let subtractionTwo = parseInt($('#subtractionTwo').val());
let subtractionThree = parseInt($('#subtractionThree').val());
let subtractionFour = parseInt($('#subtractionFour').val());
let subtractionFive = parseInt($('#subtractionFive').val());
let subtractionSix = parseInt($('#subtractionSix').val());
let subtractionSeven = parseInt($('#subtractionSeven').val());
let subtractionEight = parseInt($('#subtractionEight').val());
let subtractionNine = parseInt($('#subtractionNine').val());
let subtractionTen = parseInt($('#subtractionTen').val());

let subCorrect = 0;
let subWrong = 0;

 if (subtractionOne === minus1 - minus2) {
   subCorrect ++
   
 } else if (subtractionOne != minus1 - minus2){
  subWrong ++
 }

 if (subtractionTwo === minus3 + minus4) {
     subCorrect ++
 } else if (subtractionTwo != minus3 - minus4){
    subWrong ++
 }

 if(subtractionThree === minus5 - minus6) {
     subCorrect++
 } else if (subtractionThree != minus5 - minus6){
     subWrong ++
 }

 if(subtractionFour === minus7 - minus8) {
    subCorrect++
} else if (subtractionFour != minus7 - minus8){
    subWrong ++
}

if(subtractionFive === minus9 - minus10) {
    subCorrect++
} else if (subtractionFive != minus9 - minus10){
    subWrong ++
}

if(subtractionSix === minus11 - minus12) {
    subCorrect++
} else if (subtractionSix != minus11 - minus12){
    subWrong ++
}

if(subtractionSeven === minus13 - minus14) {
    subCorrect++
} else if (subtractionSeven != minus13 - minus14){
    subWrong ++
}

if(subtractionEight === minus15 - minus16) {
    subCorrect++
} else if (subtractionEight != minus15 - minus16){
    subWrong ++
}

if(subtractionNine === minus17 - minus18) {
    subCorrect++
} else if (subtractionNine != minus17 - minus18){
    subWrong ++
}

if(subtractionTen === minus19 - minus20) {
    subCorrect++
} else if (subtractionTen != minus19 - minus20){
    subWrong ++
}


 $('#subCorrect').text(subCorrect)
 $('#subWrong').text(subWrong)
})