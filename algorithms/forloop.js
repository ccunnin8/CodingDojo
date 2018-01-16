// //-52 to -1066
// for (var i = -52; i <= 1066; i++)
// {
//   console.log(i);
// }
//
// //don't worry be happy
// function beCheerful() {
//   console.log("good morning!");
// }
// for (var i = 0; i < 98; i++){
//   beCheerful();
// }
//Multiples of Three - but not all
for (var i = 3; i >= -300; i--){
  if (i === -3 || i === -6) {
    continue;
  }
  else {
    console.log(i);
  }
}
