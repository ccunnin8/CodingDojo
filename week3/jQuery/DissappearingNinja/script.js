$(document).ready(()=>{

  //Today I learned that arrow functions do not have their own THIS
  //so
  // $("img").click(()=>{
  //   $(this).hide();
  // });
  //does not work
  $("img").click(function(){
    $(this).hide();
  })
  $("button").click(()=>{
    $("img").show();
  })
})
