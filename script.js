function showAnswer() {
  var answer1 = document.querySelector('input[name="question1"]:checked').value;
  var answer2 = document.querySelector('input[name="question2"]:checked').value;
  var answer3 = document.querySelector('input[name="question3"]:checked').value;
  var answer4 = document.querySelector('input[name="question4"]:checked').value;
  var answer5 = document.querySelector('input[name="question5"]:checked').value;
  var answer6 = document.querySelector('input[name="question6"]:checked').value;
  var answer7 = document.querySelector('input[name="question7"]:checked').value;
  var answer8 = document.querySelector('input[name="question8"]:checked').value;
  var answer9 = document.querySelector('input[name="question9"]:checked').value;
  var answer10 = document.querySelector('input[name="question10"]:checked').value;
  var answer11 = document.querySelector('input[name="question11"]:checked').value;
  var answer12 = document.querySelector('input[name="question12"]:checked').value;

  var allAnswers1 = document.querySelectorAll('input[name="question1"]');
  var allAnswers2 = document.querySelectorAll('input[name="question2"]');
  var allAnswers3 = document.querySelectorAll('input[name="question3"]');
  var allAnswers4 = document.querySelectorAll('input[name="question4"]');
  var allAnswers5 = document.querySelectorAll('input[name="question5"]');
  var allAnswers6 = document.querySelectorAll('input[name="question6"]');
  var allAnswers7 = document.querySelectorAll('input[name="question7"]');
  var allAnswers8 = document.querySelectorAll('input[name="question8"]');
  var allAnswers9 = document.querySelectorAll('input[name="question9"]');
  var allAnswers10 = document.querySelectorAll('input[name="question10"]');
  var allAnswers11 = document.querySelectorAll('input[name="question11"]');
  var allAnswers12 = document.querySelectorAll('input[name="question12"]');
  

  var answerString1 = "";
  var answerString2 = "";
  var answerString3 = "";
  var answerString4 = "";
  var answerString5 = "";
  var answerString6 = "";
  var answerString7 = "";
  var answerString8 = "";
  var answerString9 = "";
  var answerString10 = "";
  var answerString11 = "";
  var answerString12 = "";

  allAnswers1.forEach(function(input) {
    if (input.checked) {
      answerString1 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString1 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers2.forEach(function(input) {
    if (input.checked) {
      answerString2 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString2 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers3.forEach(function(input) {
    if (input.checked) {
      answerString3 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString3 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers4.forEach(function(input) {
    if (input.checked) {
      answerString4 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString4 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers5.forEach(function(input) {
    if (input.checked) {
      answerString5 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString5 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers6.forEach(function(input) {
    if (input.checked) {
      answerString6 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString6 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers7.forEach(function(input) {
    if (input.checked) {
      answerString7 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString7 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers8.forEach(function(input) {
    if (input.checked) {
      answerString8 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString8 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers9.forEach(function(input) {
    if (input.checked) {
      answerString9 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString9 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers10.forEach(function(input) {
    if (input.checked) {
      answerString10 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString10 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers11.forEach(function(input) {
    if (input.checked) {
      answerString11 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString11 += "&#x2610 " + input.value + "<br>";
    }
  });

  allAnswers12.forEach(function(input) {
    if (input.checked) {
      answerString12 += "&#x2611 " + input.value + "<br>";
    } else {
      answerString12 += "&#x2610 " + input.value + "<br>";
    }
  });

  document.getElementById("result").innerHTML =
    "--{ Build Quality }--" + "<br>" + answerString1 + "<br>" +
    "--{ Design }--" + "<br>" + answerString2 + "<br>" +
    "--{ Typing Experience }--" + "<br>" + answerString3 + "<br>" +
    "--{ Sound }--" + "<br>" + answerString4 + "<br>" +
    "--{ Comfort }--" + "<br>" + answerString5 + "<br>" +
    "--{ Connectivity }--" + "<br>" + answerString6 + "<br>" +
    "--{ Learning Curve }--" + "<br>" + answerString7 + "<br>" +
    "--{ Audience }--" + "<br>" + answerString8 + "<br>" +
    "--{ Bugs & Issues }--" + "<br>" + answerString9 + "<br>" +
    "--{ Price }--" + "<br>" + answerString10 + "<br>" +
    "--{ Availability }--" + "<br>" + answerString11 + "<br>" +
    "--{ Final Score }--" + "<br>" + answerString12 + "<br>";
}

document.getElementById("copy-button").addEventListener("click", function() {
  var html = document.getElementById("result").innerHTML;
  var text = html.replace(/<br\s*[\/]?>/gi, "\n").replace(/<[^>]+>/gi, '');
  navigator.clipboard.writeText(text).then(function() {
    console.log("Copied to clipboard");
  }, function(err) {
    console.error("Failed to copy:", err);
  });
});

