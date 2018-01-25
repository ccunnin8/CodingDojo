$(document).ready(function(){

  function clearVals(){
    var first_name = $("#first_name").val("");
    var last_name = $("#last_name").val("");
    var email = $("#email").val("");
    var phone = $("#phone").val("");
    $("form p").text("");
  }
  //form handler
  $("form").submit(function(){

    //get all values
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    //all fields are required error message
    if (first_name === "" || last_name === "" || email === "" || phone === ""){
      $("form p").text("Please fill out all fields");
      return false;
    }
    var row = $("<tr></tr>");
    row.append("<td>" + first_name + "</td>");
    row.append("<td>" + last_name + "</td>");
    row.append("<td>" + email + "</td>");
    row.append("<td>" + phone + "</td>");
    console.log(row);
    $("table tbody").append(row);
    clearVals();
    return false;
  });
});
