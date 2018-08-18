// business logic
var bbNumber = function (inputNumber){
  if (inputNumber.includes("0")) {
    return "Beep!";
  } else if (inputNumber.includes("1")){
    return "Boop!";
  }
    // else if (inputNumber.match(/[a-z]/i)){
    //       return (false);

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
