$(document).ready(function() {
//Everything below this line is back-end logic:


//Everything below this line is front-end logic:

  $("form").submit(function(event) {
    event.preventDefault();

    var pizza = $("#pizza").val();
    //radiobuttons
    var flavor = $("input:radio[name=flavor]:checked").val();
    //calendar
    var dob = $("#born").val();
    //choosecolor
    var favoriteColor = $("#color").val();

    // console.log(pizza);
    $("#outputpizza").text(pizza);
    $("#outputflav").text(flavor);
    $("#outputdob").text(dob);
    $("#outputfavcolor").text(favoriteColor);
  });

});
