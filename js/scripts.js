function over1000(roman){
  if (roman[0] == 3){
    result.push('M', 'M', 'M');
  } else if (roman[0] == 2) {
    result.push('M', 'M');
  } else {
    result.push('M');
  }
  roman.shift();
  over100(roman);
}

function over100(roman){
  if (roman[0] == 9){
    result.push('C', 'M');
  } else if (roman[0] == 8) {
    result.push('D', 'C', 'C', 'C');
  } else if (roman[0] == 7) {
    result.push('D', 'C', 'C');
  } else if (roman[0] == 6) {
    result.push('D', 'C');
  } else if (roman[0] == 5) {
    result.push('D');
  } else if (roman[0] == 4) {
    result.push('C', 'D');
  } else if (roman[0] == 3) {
    result.push('C', 'C', 'C');
  } else if (roman[0] == 2) {
    result.push('C', 'C');
  } else if (roman[0] == 1) {
    result.push('C');
  }
  roman.shift();
  over10(roman);
}

function over10(roman){
  if (roman[0] == 9){
    result.push('X', 'C');
  } else if (roman[0] == 8) {
    result.push('L', 'X', 'X', 'X');
  } else if (roman[0] == 7) {
    result.push('L', 'X', 'X');
  } else if (roman[0] == 6) {
    result.push('L', 'X');
  } else if (roman[0] == 5) {
    result.push('L');
  } else if (roman[0] == 4) {
    result.push('X', 'L');
  } else if (roman[0] == 3) {
    result.push('X', 'X', 'X');
  } else if (roman[0] == 2) {
    result.push('X', 'X');
  } else if (roman[0] == 1) {
    result.push('X');
  }
  roman.shift();
  over0(roman);
}

function over0(roman){
  if (roman[0] == 9){
    result.push('I', 'X');
  } else if (roman[0] == 8) {
    result.push('V', 'I', 'I', 'I');
  } else if (roman[0] == 7) {
    result.push('V', 'I', 'I');
  } else if (roman[0] == 6) {
    result.push('V', 'I');
  } else if (roman[0] == 5) {
    result.push('V');
  } else if (roman[0] == 4) {
    result.push('I', 'V');
  } else if (roman[0] == 3) {
    result.push('I', 'I', 'I');
  } else if (roman[0] == 2) {
    result.push('I', 'I');
  } else if (roman[0] == 1) {
    result.push('I');
  }
  result = result.toString();
  result = result.replace(/,/g, "");
  $("#stringOut").text(result);
}







//dirver function
function clicked(event){
  event.preventDefault();
  var counter = parseInt($("input#stringIn").val());
  //turn var roman into a an array of integers, replace prevents non number charachters
  //map states that it is a number and not an integer
  var roman = counter.toString(10).replace(/\D/g, '0').split('').map(Number);
  if (counter < 4000 && counter > 0) {
    if (counter >= 1000){
      over1000(roman);
    } else if (counter >= 100) {
      over100(roman);
    } else if (counter >= 10){
      over10(roman);
    } else if (counter > 0){
      over0(roman);
    }
  } else {
    alert("You did not enter a good valid value");
  }
};

var result = [];
