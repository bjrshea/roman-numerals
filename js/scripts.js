var romanize = function(number) {
  var arabicInput = $("#user-input").val();
  return arabicInput;
};

$(document).ready(function() {
  $("#form-input").submit(function(event){
      event.preventDefault();
      romanize().text($("#result-insert"));
  });
});
