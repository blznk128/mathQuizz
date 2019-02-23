

$('#done').on('click', function() {
    event.preventDefault();
    let answerOne = $('#ans1').val();
    let answerTwo = $('#ans2').val();
    let answerThree = $('#ans3').val();
    let answerFour = $('#ans4').val();
    let answerFive = $('#ans5').val();
    let answerSix = $('#ans6').val();
    let answerSeven = $('#ans7').val();
    let answerEight = $('#ans8').val();
    let answerNine = $('#ans9').val();
    let answerTen = $('#ans10').val();
    console.log(answerTwo)
    let correct = 0;
    let wrong = 0;
     if (answerOne === '6') {
         correct ++
     } else if (answerOne != '6'){
        wrong ++
     }

     if(answerTwo === '9') {
         correct++
     } else if (answerTwo != '9'){
         wrong ++
     }

     if(answerThree === '60') {
        correct++
    } else if (answerThree != '60'){
        wrong ++
    }

    if(answerFour === '21') {
        correct++
    } else if (answerFour != '21'){
        wrong ++
    }

    if(answerFive === '3') {
        correct++
    } else if (answerFive != '3'){
        wrong ++
    }

    if(answerSix === '0') {
        correct++
    } else if (answerSix != '0'){
        wrong ++
    }

    if(answerSeven === '24') {
        correct++
    } else if (answerSeven != '24'){
        wrong ++
    }

    if(answerEight === '45') {
        correct++
    } else if (answerEight != '45'){
        wrong ++
    }

    if(answerNine === '30') {
        correct++
    } else if (answerNine != '30'){
        wrong ++
    }

    if(answerTen === '15') {
        correct++
    } else if (answerTen != '15'){
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