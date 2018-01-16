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
