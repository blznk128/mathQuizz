// determines the math problem
    let int1 = Math.floor((Math.random() * 11) +1);
    let int2 = Math.floor((Math.random() * 11) +1);
    let int3 = Math.floor((Math.random() * 11) +1);
    let int4 = Math.floor((Math.random() * 11) +1);
    let int5 = Math.floor((Math.random() * 11) +1);
    let int6 = Math.floor((Math.random() * 11) +1);
    let int7 = Math.floor((Math.random() * 11) +1);
    let int8 = Math.floor((Math.random() * 11) +1);
    let int9 = Math.floor((Math.random() * 11) +1);
    let int10 = Math.floor((Math.random() * 11) +1);
    let int11 = Math.floor((Math.random() * 11) +1);
    let int12 = Math.floor((Math.random() * 11) +1);
    let int13 = Math.floor((Math.random() * 11) +1);
    let int14 = Math.floor((Math.random() * 11) +1);
    let int15 = Math.floor((Math.random() * 11) +1);
    let int16 = Math.floor((Math.random() * 11) +1);
    let int17 = Math.floor((Math.random() * 11) +1);
    let int18 = Math.floor((Math.random() * 11) +1);
    let int19 = Math.floor((Math.random() * 11) +1);
    let int20 = Math.floor((Math.random() * 11) +1);
   
//determines the answers
    let total = int1 + int2;
    let toatalTwo = int3 + int4;
    let totalThree = int5 + int6;
    let toatalFour = int7 + int8;
    let totalFive = int9 + int10;
    let toatalSix = int11 + int12;
    let totalSeven = int13 + int14;
    let toatalEight = int15 + int16;
    let totalNine = int17 + int18;
    let toatalTen = int19 + int20;

//sets the numbers to the screen
    $('#testing').append(int1 + " " + " + " + int2 + " = " + "<input id = 'problemOne'></input>");
    $('#testing').append('<br>' + int3 + " " + " + " + int4 + " = " + "<input id = 'problemTwo'></input>");
    $('#testing').append('<br>' + int5 + " " + " + " + int6 + " = " + "<input id = 'problemThree'></input>");
    $('#testing').append('<br>' + int7 + " " + " + " + int8 + " = " + "<input id = 'problemFour'></input>");
    $('#testing').append('<br>' + int9 + " " + " + " + int10 + " = " + "<input id = 'problemFive'></input>");
    $('#testing').append('<br>' + int11 + " " + " + " + int12 + " = " + "<input id = 'problemSix'></input>");
    $('#testing').append('<br>' + int13 + " " + " + " + int14 + " = " + "<input id = 'problemSeven'></input>");
    $('#testing').append('<br>' + int15 + " " + " + " + int16 + " = " + "<input id = 'problemEight'></input>");
    $('#testing').append('<br>' + int17 + " " + " + " + int18 + " = " + "<input id = 'problemNine'></input>");
    $('#testing').append('<br>' + int19 + " " + " + " + int20 + " = " + "<input id = 'problemTen'></input>");

//users clicks done, calculates correct and wrong answers
$('#done').on('click', function() {
    event.preventDefault();
    let problemOne = parseInt($('#problemOne').val());
    let problemTwo = parseInt($('#problemTwo').val());
    let problemThree = parseInt($('#problemThree').val());
    let problemFour = parseInt($('#problemFour').val());
    let problemFive = parseInt($('#problemFive').val());
    let problemSix = parseInt($('#problemSix').val());
    let problemSeven = parseInt($('#problemSeven').val());
    let problemEight = parseInt($('#problemEight').val());
    let problemNine = parseInt($('#problemNine').val());
    let problemTen = parseInt($('#problemTen').val());
    
    let correct = 0;
    let wrong = 0;

     if (problemOne === int1 + int2) {
       correct ++
       
     } else if (problemOne != int1 + int2){
      wrong ++
     }
    
     if (problemTwo === int3 + int4) {
         correct ++
     } else if (problemTwo != int3 + int4){
        wrong ++
     }

     if(problemThree === int5 + int6) {
         correct++
     } else if (problemThree != int5 + int6){
         wrong ++
     }

     if(problemFour === int7 + int8) {
        correct++
    } else if (problemFour != int7 + int8){
        wrong ++
    }

    if(problemFive === int9 + int10) {
        correct++
    } else if (problemFive != int9 + int10){
        wrong ++
    }

    if(problemSix === int11 + int12) {
        correct++
    } else if (problemSix != int11 + int12){
        wrong ++
    }

    if(problemSeven === int13 + int14) {
        correct++
    } else if (problemSeven != int13 + int14){
        wrong ++
    }

    if(problemEight === int15 + int16) {
        correct++
    } else if (problemEight != int15 + int16){
        wrong ++
    }

    if(problemNine === int17 + int18) {
        correct++
    } else if (problemNine != int17 + int18){
        wrong ++
    }

    if(problemTen === int19 + int20) {
        correct++
    } else if (problemTen != int19 + int20){
        wrong ++
    }

    
     $('#correct').text(correct)
     $('#wrong').text(wrong)
})

$("#reset").on('click', function() {
    // event.preventDefault()
    console.log('hi')
    $('#ans1').val('');
    $('#ans2').val('');
    $('#ans3').val('');
    $('#ans4').val('');
    $('#ans5').val('');
    $('#ans6').val('');
    $('#ans7').val('');
    $('#ans8').val('');
    $('#ans9').val('');
    $('#ans10').val('');
})

// start()