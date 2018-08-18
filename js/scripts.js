// business logic
var bbNumber = function (inputNumber){
  var outut = [];
  if (inputNumber.match(/[a-z]/i)){
    return ("System Overload!!!");
  } else {
    for (i = 0; i <= inputNumber; i++){
   if (inputNumber % 3 === 0){
      return "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (inputNumber.includes("0")) {
      return "Beep!";
    } else if (inputNumber.includes("1")){
      return "Boop!";
     (inputNumber.includes("0"))
      return "Beep!";
    }
}
    return (inputNumber);
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
