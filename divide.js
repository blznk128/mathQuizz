// determines the math problem
let multi1 = Math.floor((Math.random() * 11) +1);
let multi2 = Math.floor((Math.random() * 11) +1);
let multi3 = Math.floor((Math.random() * 11) +1);
let multi4 = Math.floor((Math.random() * 11) +1);
let multi5 = Math.floor((Math.random() * 11) +1);
let multi6 = Math.floor((Math.random() * 11) +1);
let multi7 = Math.floor((Math.random() * 11) +1);
let multi8 = Math.floor((Math.random() * 11) +1);
let multi9 = Math.floor((Math.random() * 11) +1);
let multi10 = Math.floor((Math.random() * 11) +1);
let multi11 = Math.floor((Math.random() * 11) +1);
let multi12 = Math.floor((Math.random() * 11) +1);
let multi13 = Math.floor((Math.random() * 11) +1);
let multi14 = Math.floor((Math.random() * 11) +1);
let multi15 = Math.floor((Math.random() * 11) +1);
let multi16 = Math.floor((Math.random() * 11) +1);
let multi17 = Math.floor((Math.random() * 11) +1);
let multi18 = Math.floor((Math.random() * 11) +1);
let multi19 = Math.floor((Math.random() * 11) +1);
let multi20 = Math.floor((Math.random() * 11) +1);


//sets the numbers to the screen
$('#multiply').append(multi1 + " " + " * " + multi2 + " = " + "<input id = 'multiProblemOne'></input>");
$('#multiply').append('<br>' + multi3 + " " + " * " + multi4 + " = " + "<input id = 'multiProblemTwo'></input>");
$('#multiply').append('<br>' + multi5 + " " + " * " + multi6 + " = " + "<input id = 'multiProblemThree'></input>");
$('#multiply').append('<br>' + multi7 + " " + " * " + multi8 + " = " + "<input id = 'multiProblemFour'></input>");
$('#multiply').append('<br>' + multi9 + " " + " * " + multi10 + " = " + "<input id = 'multiProblemFive'></input>");
$('#multiply').append('<br>' + multi11 + " " + " * " + multi12 + " = " + "<input id = 'multiProblemSix'></input>");
$('#multiply').append('<br>' + multi13 + " " + " * " + multi14 + " = " + "<input id = 'multiProblemSeven'></input>");
$('#multiply').append('<br>' + multi15 + " " + " * " + multi16 + " = " + "<input id = 'multiProblemEight'></input>");
$('#multiply').append('<br>' + multi17 + " " + " * " + multi18 + " = " + "<input id = 'multiProblemNine'></input>");
$('#multiply').append('<br>' + multi19 + " " + " * " + multi20 + " = " + "<input id = 'multiProblemTen'></input>");



//users clicks done, calculates Correct and Wrong answers
$('#multiDone').on('click', function() {
event.preventDefault();
let multiProblemOne = parseInt($('#multiProblemOne').val());
let multiProblemTwo = parseInt($('#multiProblemTwo').val());
let multiProblemThree = parseInt($('#multiProblemThree').val());
let multiProblemFour = parseInt($('#multiProblemFour').val());
let multiProblemFive = parseInt($('#multiProblemFive').val());
let multiProblemSix = parseInt($('#multiProblemSix').val());
let multiProblemSeven = parseInt($('#multiProblemSeven').val());
let multiProblemEight = parseInt($('#multiProblemEight').val());
let multiProblemNine = parseInt($('#multiProblemNine').val());
let multiProblemTen = parseInt($('#multiProblemTen').val());

let multiCorrect = 0;
let multiWrong = 0;

 if (multiProblemOne === multi1 * multi2) {
   multiCorrect ++
   
 } else if (multiProblemOne != multi1 * multi2){
  multiWrong ++
 }

 if (multiProblemTwo === multi3 * multi4) {
     multiCorrect ++
 } else if (multiProblemTwo != multi3 * multi4){
    multiWrong ++
 }

 if(multiProblemThree === multi5 * multi6) {
     multiCorrect++
 } else if (multiProblemThree != multi5 * multi6){
     multiWrong ++
 }

 if(multiProblemFour === multi7 * multi8) {
    multiCorrect++
} else if (multiProblemFour != multi7 * multi8){
    multiWrong ++
}

if(multiProblemFive === multi9 * multi10) {
    multiCorrect++
} else if (multiProblemFive != multi9 * multi10){
    multiWrong ++
}

if(multiProblemSix === multi11 * multi12) {
    multiCorrect++
} else if (multiProblemSix != multi11 * multi12){
    multiWrong ++
}

if(multiProblemSeven === multi13 * multi14) {
    multiCorrect++
} else if (multiProblemSeven != multi13 * multi14){
    multiWrong ++
}

if(multiProblemEight === multi15 * multi16) {
    multiCorrect++
} else if (multiProblemEight != multi15 * multi16){
    multiWrong ++
}

if(multiProblemNine === multi17 * multi18) {
    multiCorrect++
} else if (multiProblemNine != multi17 * multi18){
    multiWrong ++
}

if(multiProblemTen === multi19 * multi20) {
    multiCorrect++
} else if (multiProblemTen != multi19 * multi20){
    multiWrong ++
}


 $('#multiCorrect').text(multiCorrect)
 $('#multiWrong').text(multiWrong)
})