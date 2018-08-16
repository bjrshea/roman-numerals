var romanNumerals = [["I"], ["V"], ["X"], ["L"], ["C"], ["D"], ["M"]];
var arabicNumerals = [[1], [5], [10], [50], [100], [500], [1000]];


var numberConvert = function(string) {
  var arabicInput = ($("#user-input").val());
  var addZeroes = 4 - arabicInput.length;
  for (var i=0; i<addZeroes; i++) {
    arabicInput = "0" + arabicInput;
    console.log(arabicInput);
  };
  var pos1000 = parseInt(arabicInput.charAt(0));
  var pos100 = parseInt(arabicInput.charAt(1));
  var pos10 = parseInt(arabicInput.charAt(2));
  var pos1 = parseInt(arabicInput.charAt(3));
  console.log(pos1000);
  console.log(pos100);
  console.log(pos10);
  console.log(pos1);
};





$(document).ready(function() {
  $("#form-input").submit(function(event){
      event.preventDefault();
      $("#result-insert").text(numberConvert());
  });
});
