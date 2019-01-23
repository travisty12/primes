function numsGet() {
  var num1 = false;
  var num2 = false;
  var numEnd;
  var numInc;
  while(!num1) {
    numEnd = parseInt(prompt("Count to: "));
    if (isNaN(numEnd)) {
      alert("Not a number");
    } else if (numEnd <= 0) {
      alert("Number must be positive");
    } else {
      num1 = true;
    }
  }
  while(!num2) {
    numInc = parseInt(prompt("Count by: "));
    if (isNaN(numInc)) {
      alert("Not a number");
    } else if (numInc <= 0) {
      alert("Increment must be positive");
    } else if (numInc > numEnd) {
      alert("Increment must be smaller than end number");
    } else {
      num2 = true;
    }
  }
  for (var i = 0; i <= numEnd; i += numInc) {
    $("#result").append("<li>" + i + "</li>");
  }
  return;
}

function noVowels(strIn) {
  var chars = strIn.split("");
  var notVowels = chars.map(function(char) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      return "-";
    } else {
      return char;
    }
  });
  return notVowels.join("");
}

function addToPage() {
  $("#result").append("<li>" + noVowels($("#blankBox").val()) + "</li>");
  return;
}

function showResults() {
  var feelNum = 0;
  var healthNum = 0;
  var dealNum = 0;
  $("#feel-responses").toggle();
  $("#health-responses").toggle();
  $("#deal-responses").toggle();
  $("#result").toggle();
  $("input:checkbox[name=stress-feel]:checked").each(function() {
    var stressFeel = $(this).val();
    $("#feel-responses").append(stressFeel + "<br>");
    feelNum++;
  });
  $("input:checkbox[name=stress-health]:checked").each(function() {
    var stressHealth = $(this).val();
    $("#health-responses").append(stressHealth + "<br>");
    healthNum++;
  });
  $("input:checkbox[name=stress-deal]:checked").each(function() {
    var stressDeal = $(this).val();
    $("#deal-responses").append(stressDeal + "<br>");
    dealNum++;
  });
  $("#stress-test").hide();
  if (dealNum >= (feelNum + healthNum)) {
    $("#result").append("<p><b>Wow, you're doing great, man!</p></b><br>");
  } else if (dealNum > feelNum && dealNum > healthNum) {
    $("#result").append("<p><b>You're dealing with stuff in a healthy way.</p></b><br>");
  } else if (dealNum < feelNum && dealNum < healthNum) {
    $("#result").append("<p><b>You're all messed up.</p></b><br>");
  } else if (dealNum < (feelNum + healthNum)) {
    $("#result").append("<p><b>You should try to find more stress relievers.</p></b><br>");
  }
}

function factorial(numIn) {
  if (numIn == 0) {
    return 1;
  } else {
    return (numIn * factorial(numIn - 1));
  }
}

function checkPalindrome(strIn) {
  var chars = strIn.split("");
  console.log(chars);
  console.log(chars.reverse())
  if (chars.join('') === chars.reverse().join('')) {
    console.log("yep");

    $("#result").append("<li>Yep</li>");
    return;
  } else {
    console.log("nope");

    $("#result").append("<li>Nope</li>");
    return;
  }
}

function primesUnder() {
  var numValid = false;

  var numIn = parseInt(prompt("Enter a number, to see primes less than it: "));
  if (numIn > 10000) {
    $("#result").text("No");
    return;
  } else {
    var numList = [];
    var prime = 2;
    for (var i = 2; i <= numIn; i++) {
      numList.push(i);

    }
    for (var j = 0; j <= Math.floor(Math.sqrt(numIn)); j++) {
      for (var k = j + prime; k <=numIn; k += prime) {
        numList[k] = "";

      }
        prime++;
    }
    for (var i = 0; i < numList.length; i++) {
      if ( numList[i] == "") {
        numList.splice(i,1);
        i--;
      }
    }
    $("#result").text("");
    $("#result").append("<li>There are " + (numList.length - 1) + " primes under " + numIn + "</li>");
    for (var i = 0; i < numList.length - 1; i++) {
      $("#result").append("<li>" + numList[i] + "</li>");
    }
    return;
  }
}

function primesBetween() {
  var rangeBottom = parseInt(prompt("Enter a lower bound for your list (default is 0): "));
  if (rangeBottom > 10000) {
    $("#result").text("No");
    return;
  } else if (rangeBottom < 0) {
    $("#result").text("Range must contain positive numbers");
    return;
  } else {
    if (isNaN(rangeBottom)) {
      rangeBottom = 0;
    }
    var numIn = parseInt(prompt("Enter a higher bound, to see primes within your range: "));
    if (numIn > 10000) {
      $("#result").text("No");
      return;
    } else if (numIn <= rangeBottom){
      $("#result").text("Number must be higher than lower bound");
      return;
    } else {
      var numList = [];
      var prime = 2;
      for (var i = 2; i <= numIn; i++) {
        numList.push(i);

        console.log(numList);
      }
      for (var j = 0; j <= Math.floor(Math.sqrt(numIn)); j++) {
        for (var k = j + prime; k < numIn; k += prime) {
          numList[k] = "";
          console.log(numList);

        }
          prime++;
      }
      if (numIn == 2) {
        numList[1] = "";
      }
      for (var i = 0; i < numList.length; i++) {
        console.log(numList);
        if ( numList[i] == "") {
          numList.splice(i,1);
          i--;
        }
      }
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] < rangeBottom) {
          numList.splice(i,1);
          i--;
        }
      }
      $("#result").text("");
      console.log(numList);
      if (numList.length <= 1) {
        $("#result").append("<li>There are no primes between " + rangeBottom + " and " + numIn + ", upper bound not counting.</li>");
      } else if (numList.length == 2) {
        $("#result").append("<li>There is one prime between " + rangeBottom + " and " + numIn + "</li>");
      } else {
        $("#result").append("<li>There are " + (numList.length - 1) + " primes between " + rangeBottom + " and " + numIn + ", upper bound not counting.</li>");
      }
      for (var i = 0; i < numList.length - 1; i++) {
        $("#result").append("<li>" + numList[i] + "</li>");
      }
      return;
    }
  }
}

$(document).ready(function() {
  // numsGet();
  $("#encrypt").submit(function() {
    event.preventDefault();
    addToPage();
  });
  $("#stress-test").submit(function() {
    event.preventDefault();
    showResults();
  });
  // var numPrompt = parseInt(prompt("enter a number to factorialize: "));
  // alert(factorial(numPrompt));
  // var strCheck = prompt("Enter a sentence, to check if it's a palindrome.");
  // checkPalindrome(strCheck);
  $("#primer").click(function() {
    primesUnder();
  });

  $("#bound").click(function() {
    primesBetween();
  });
});
