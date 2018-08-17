// business logic
var bbNumber = function (inputNumber){
  var rangeArr = Array.from({length: inputNumber}, (x,i) => i);
  rangeArr.push(inputNumber);
  rangeArr.shift();
  return (rangeArr)

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
