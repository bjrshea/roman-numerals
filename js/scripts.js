var result = "";

var numberConvert = function(string) {
  var addZeroes = 4 - string.length;
  for (var i=0; i<addZeroes; i++) {
    string = "0" + string;
    console.log(string);
  };
  var pos1000 = parseInt(string.charAt(0));
  var pos100 = parseInt(string.charAt(1));
  var pos10 = parseInt(string.charAt(2));
  var pos1 = parseInt(string.charAt(3));
  console.log(pos1000);
  console.log(pos100);
  console.log(pos10);
  console.log(pos1);

  for (pos1000; pos1000>0;) {
    if ((pos1000 < 4) && (pos1000 > 0)) {
      result += "M";
      pos1000 -= 1;
    }
  };

  for (pos100; pos100>0;) {
    if (pos100 === 9) {
      result += "CM";
      pos100 -= 9;
    }
    if (pos100 === 4) {
      result += "CD";
      pos100 -= 4;
    }
    if (pos100 >= 5) {
      result += "D";
      pos100 -= 5;
    }
    if ((pos100 < 4) && (pos100 > 0)) {
      result += "C";
      pos100 -= 1;
    }
  };

  for (pos10; pos10>0;) {
    if (pos10 === 9) {
      result += "XC";
      pos10 -= 9;
    }
    if (pos10 === 4) {
      result += "XL";
      pos10 -= 4;
    }
    if (pos10 >= 5) {
      result += "L";
      pos10 -= 5;
    }
    if ((pos10 < 4) && (pos10 > 0)) {
      result += "X";
      pos10 -= 1;
    }
  };

  for (pos1; pos1>0;) {
    if (pos1 === 9) {
      result += "IX";
      pos1 -= 9;
    }
    if (pos1 === 4) {
      result += "IV";
      pos1 -= 4;
    }
    if (pos1 >= 5) {
      result += "V";
      pos1 -= 5;
    }
    if ((pos1 < 4) && (pos1 > 0)) {
      result += "I";
      pos1 -= 1;
    }
  };
};

$(document).ready(function() {
  $("#form-input").submit(function(event){
      event.preventDefault();
      result = "";
      var arabicInput = ($("#user-input").val());
      numberConvert(arabicInput);
      $("#result-insert").text(result);
  });
});
