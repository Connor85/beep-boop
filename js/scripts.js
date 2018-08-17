// business logic
var numberInput = function (inputNumber){
  return (inputNumber)

}
// user logic
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputtxt").val();
    output = numberInput(userInput);
    $("#result").text(output);
  });
});
