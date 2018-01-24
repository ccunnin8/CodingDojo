$(document).ready(function(){

  //add click handler to ALL images
  $("img").click(function(){
    var src = $(this).attr("src");
    var alt_src = $(this).data("alt-src");
    $(this).attr("src",alt_src).data("alt-src",src);
  })
});
