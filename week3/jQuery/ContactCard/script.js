$(document).ready(function(){
        //
        // function getFormValues(){
        //   return {
        //     "first_name": $("#name").val(),
        //     "last_name": $("#last_name").val(),
        //     "description": $("#description").val()
        //   };
        // }
        //
        // function submitHandler() {
        //   $("input[type='submit']").submit(function(){
        //     alert("TEST");
        //     var { first_name, last_name, description } = getFormValues();
        //     if (first_name === "" || last_name === "" || description === ""){
        //       $("p.error").text("Please enter all fields!");
        //     }
        //     else {
        //       newCard(first_name, last_name, description);
        //     }
        //     return false;
        //   });
        // }
        // function switchClasses(el){
        //   console.log("TEST");
        //   console.log($(this));
        //   el.parent().addClass("hide");
        //   el.parent().siblings().removeClass("hide");
        // }
        //
        // function frontButton() {
        //   $(".front button").click(function(){
        //     switchClasses($(this));
        //   });
        // }
        //
        // function backButton() {
        //   $(".back button").click(function(){
        //     switchClasses($(this));
        //   })
        // }
        //
        // function newCard(first_name, last_name, description){
        //   var newCard = $("<div class='card'></div>");
        //   var newFront = $("<div class='front'><h1></h1><button>Click for more info</button></div>");
        //   var newBack = $("<div class='back'><p></p><button>Back</button></div>");
        //   var name = first_name + " " + last_name;
        //   newFront.find("h1").text(name);
        //   newBack.find("p").text(description);
        //   $(".cards").append(newCard).append(newFront).append(newBack);
        //   frontButton();
        //   backButton();
        // }
        $(".front button").click(function(){
          console.log("test");
        })

});
