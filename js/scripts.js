$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const yournameInput = $("input#yourname").val();
    const hobbiesInput = $("input#hobbies").val();
    const favoriteplaceInput= $("input#favoriteplace").val();

    $(".yourname").append(yournameInput);
    $(".hobbies").append(hobbiesInput);
    $(".favoriteplace").append(favoriteplaceInput);
 
    $("#letter").show();

    event.preventDefault();
  });
});