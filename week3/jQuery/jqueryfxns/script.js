$(document).ready(function(){

  //Click
  $(".click button").click(function(){
    alert("You clicked me");
  });

  //hide
  $(".hide button").click(function(){
    $(".hide h1").hide();
  });

  //show
  $(".show button").click(function(){
    $(this).next().show();
  })

  //toggle
  $(".toggle button").click(function(){
    $(this).next().toggle();
  });

  //slide up
  $(".slideup button").click(()=>{
    $(".slideup div").slideUp();
  });

  //slide down
  //IMPORTANT TO REMEMBER THAT SLIDEDOWN ONLY WORKS
  //IF THE OBJECT IS NOT DISPLAYED
  $(".slidedown button").click(()=> {
    $(".slidedown div").slideDown();
  });

  //add Class
  $(".addClass button").click(()=>{
    $(".addClass h1").addClass("red");
  });

  //before
  $(".before button").click(()=>{
    $(".before button").before("<div></div>");
  });

  //after
  $(".after button").click(()=>{
    $(".after button").after("<div></div>");
  });

  //append
  $(".append button").click(()=>{
    $(".append").append("<p>This paragraph was appended to the section with the class append");
  });

  //html
  $(".html button").click(()=>{
    $(".html").html("<h1>Overwritten</h1><p>All of the html in the html section was overwritten");
  });

  //attr
  $(".attr button").click(()=>{
    var attr = $(".attr button").attr("class");
    $(".attr p span").text(attr);
  });

  //val
  $(".val button").click(()=>{
    var val = $(".val input").val();
    alert(val);
  });

  //text
  $(".text button").click(()=>{
    $(".text p").text("you just inserted a bunch of text into this paragraph");
  });

  //data
  $(".data button").click(()=>{
    var data = $(".data h1").data("test");
    alert(data);
  });

})
