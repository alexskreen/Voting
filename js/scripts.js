$(document).ready(function()  {
  var age = parseInt(prompt("How old is you?!"));

  if (age === 18) {
    alert("Congrats on voting in your first election!");
    $('#ofvotingage').show();
  }
  else if (age > 18) {
    $('#ofvotingage').show();
  }
  else {
    alert("I applaud your political aspirations but you're not quite there yet!");
    $('#underage').show();
    $('#samplepicture').show();
  }
});
