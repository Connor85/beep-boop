// business logic
var bbNumber = function (inputNumber){
  // var rangeArr = Array.from({length: inputNumber}, (x,i) => i);
  // rangeArr.push(inputNumber);
  // rangeArr.shift();
  // var newArr = parseInt($(rangeArr));
  //
  // newArr.forEach(function(part) {
  //   part = 1;
  //   return "Beep!";
  // })
//old wok
  var enteredNumbers = []
  for (i = 0; i <= inputNumber; i++) {
    if (i% 3 === 0)
    return "I'm sorry, Dave. I'm afraid I can't do that."{
      else if (enteredNumbers = 1) {
        return ("Boop!")
      }
    }
}

  return (enteredNumbers)
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
