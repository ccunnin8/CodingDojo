/*
While You Wait
Create a birthday countdown.

var daysUntilMyBirthday = 60;
For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, print a message that sounds excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY, HAVE A PARTY!
*/
var daysUntilMyBirthday = 60;

while (daysUntilMyBirthday > 0) {
  if (daysUntilMyBirthday > 30 ) {
    console.log(daysUntilMyBirthday + " days until my bday. Such a long time... ;(");
  }
  else if (daysUntilMyBirthday < 30 && daysUntilMyBirthday > 5) {
    console.log(daysUntilMyBirthday + " days left!");
  }
  else if (daysUntilMyBirthday < 5) {
    console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!");
  }
  daysUntilMyBirthday--;
}
console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
