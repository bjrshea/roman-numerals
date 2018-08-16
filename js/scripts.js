var romanNumerals = [["I",1], ["V",5], ["X",10], ["L",50], ["C",100], ["D", 500], ["M",1000]];

var romanize = function(number) {
  var arabicInput = parseInt($("#user-input").val());
  for (i=0; i<7; i++)
    if ((romanNumerals[i][1]) === arabicInput) {
      var romanOutput = romanNumerals[i][0]
      console.log(romanOutput);
      return romanOutput
    } else {
      return "I'm sorry, Dave, I can't do that."
    }
  return romanOutput;
};

$(document).ready(function() {
  $("#form-input").submit(function(event){
      event.preventDefault();
      $("#result-insert").text(romanize());
  });
});
