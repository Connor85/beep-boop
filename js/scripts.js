// business logic
var bbNumber = function (inputNumber){
  var i = 1
  var range = Array.from({length: inputNumber}, (x,i) => i);
  return (range)

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
