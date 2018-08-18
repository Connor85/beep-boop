// business logic
var bbNumber = function (inputNumber){
  var output = [];
  if (inputNumber.match(/[a-z]/i)){
    return ("System Overload!!!");
  } else {
    for (i = 0; i <= inputNumber; i++){
      if (i % 3 === 0 && i != 0) {
            output.push("I'm sorry, Dave. I'm afraid I can't do that.");
          } else if (i.toString().includes("1")) {
            output.push("Boop!");
          } else if (i.toString().includes("0")) {
            output.push("Beep!");
          } else {
            output.push(i);
          }
        }
        return output.join(", ");
      };
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
