// business logic
var bbNumber = function (inputNumber){
  var rangeArr = Array.from({length: inputNumber}, (x,i) => i);
  rangeArr.push(inputNumber);
  rangeArr.shift();
  var regexBeep = /0/gi;
  var regexBoop = /1/gi;
  var numbers = rangeArr.toString();
    for (i = 0; i <= numbers.length; i++) {
      if (numbers % 3 === 0) {
        return ("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (numbers.includes("0")) {
        return (numbers.replace(regexBeep, 'Beep!'));
      } else if (numbers.includes("1")) {
        return (numbers.replace(regexBoop,'Boop!'));
      } else
      return (numbers);

  };
  return (numbers);
}
// user logic
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputtxt").val();
    output = bbNumber(userInput);
    $("#result").text(output);
  });
});

// var p = 'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy?';
//
// var regex = /dog/gi;
//
// console.log(p.replace(regex, 'ferret'));
