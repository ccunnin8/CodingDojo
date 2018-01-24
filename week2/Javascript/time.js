/*
If You Don't Mind, Can I Have The Time?
Create a program that will tell you the time.

With the following variables...

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
...your program should print "It's almost 9 in the morning"

And when changed to...

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
...your program should print "It's just after 7 in the evening"

Challenge:
If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
AM / PM, "in the morning", "in the evening",
HINT

You can add as many items into console.log as you need (They will be separated by spaces)

Example:

var person = "Jack";
var me = "Jill";
console.log("Hello", person, "I am ", me, ".");
// Hello Jack I am Jill.

*/

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function printTime(HOUR,MINUTE,PERIOD) {
  var string = "";
  if (MINUTE < 30) {
    string += "It's just after " + HOUR;
  }
  else {
    string += "It's almost " + (HOUR + 1);
  }
  return string += PERIOD === "AM" ? " in the morning" : " in the evening";

}
console.log(printTime(HOUR,MINUTE,PERIOD));

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

console.log(printTime(HOUR,MINUTE,PERIOD));
