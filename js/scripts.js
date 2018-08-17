// business logic
var bbNumber = function (inputNumber){
  var rangeArr = Array.from({length: inputNumber}, (x,i) => i);
  rangeArr.push(inputNumber);
  rangeArr.shift();
  var numbers = rangeArr.toString();
  alert(numbers);
    for (i = 0; i <= numbers.length; i++) {
      if (numbers % 3 === 0) {
        alert(working);
        return ("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (numbers.includes("0")) {
        return("Boop!");
      } else if (numbers.includes("1")) {
        return("Beep!");
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
