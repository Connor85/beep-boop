// business logic
var bbNumber = function (inputNumber){
    var numbers = []
    if (inputNumber.match(/[a-z]/i)){
      return (false);
    }
  return (inputNumber);
  };

// user logic
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputtxt").val();
    output = bbNumber(userInput);
    $("#result").text(output);
  });
});
