/**SETTING AND SWAPPING******
var myNumber = 42;
var myName = "Corey Cunningham";
var temp = 42;
myNumber =myName;
myName = temp;
console.log("My Number is " + myNumber + " and my name is " + myName);

/**PRINT -52 to 1066*******
// //-52 to -1066
// for (var i = -52; i <= 1066; i++)
// {
//   console.log(i);
// }
//

// ****DONT WORRY BE HAPPY
// function beCheerful() {
//   console.log("good morning!");
// }
// for (var i = 0; i < 98; i++){
//   beCheerful();
// }


//***MULTIPLES OF THREE BUT NOT ALL******
// for (var i = 3; i >= -300; i--){
//   if (i === -3 || i === -6) {
//     continue;
//   }
//   else {
//     console.log(i);
//   }
// }


//****PRINTING INTEGERS WITH WHILE
// var i = 2000
// while (i <= 5280) {
//   console.log(i);
//   i++;
// }

//****YOUR BIRTHDAY*********
// function yourBirthday(num, num2){
//   if ((num === 3 || num2 === 3) && (num === 14 || num2 == 14)){
//     console.log("How did you know?")
//   }
//   else {
//     console.log("Just another day");
//   }
// }
//
// yourBirthday(3,14);
// yourBirthday(12,14);
// yourBirthday(12,3);
// yourBirthday(14,3);

//****LEAP YEAR******///
// function leapYear(year){
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   }
//   return false;
// }
//
// console.log(leapYear(2020));
// console.log(leapYear(1999));

// *********Multiples of FIVE**********
// var count = 0;
// for (var i = 512; i <= 4096; i++){
//   if (i % 5 === 0) {
//     console.log(i);
//     count++;
//   }
// }
// console.log("TOTAL NUMBER: " + count);

// //**MULTIPLES OF SIX******
// var num = 6
// while (num <= 60000){
//   if (num % 6 === 0) console.log(num);
//   num += 6;
// }

// //**COUNTING THE DOJO WAY***
// for (var i = 1; i <=100; i++){
//   if (i % 5 === 0 && i % 10 !== 0) console.log("Coding");
//   if (i % 10 === 0) console.log("Dojo");
// }

//***WHAT DO YOU KNOW?****
// function whatdoyouknow(incoming){
//   console.log(incoming);
// }

// //**WHOA THAT SUCKER'S HUGE*******
// var sum = 0;
// for (var i = -300000; i <= 300000; i++){
//   if (i % 2 !== 0) sum += i;
// }
// console.log(sum);
