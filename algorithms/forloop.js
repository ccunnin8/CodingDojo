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
// for (var i = 3; i >= -300; i--){
//   if (i === -3 || i === -6) {
//     continue;
//   }
//   else {
//     console.log(i);
//   }
// }
//printing integers with while
// var i = 2000
// while (i <= 5280) {
//   console.log(i);
//   i++;
// }
function yourBirthday(num, num2){
  if ((num === 3 || num2 === 3) && (num === 14 || num2 == 14)){
    console.log("How did you know?")
  }
  else {
    console.log("Just another day");
  }
}

yourBirthday(3,14);
yourBirthday(12,14);
yourBirthday(12,3);
yourBirthday(14,3);
