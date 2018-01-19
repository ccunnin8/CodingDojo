// Random Chance
// Let's play the slots!
//
// Make a function that takes a number of quarters (1 quarter = 1 game).
//
// There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).
//
// While the user still has quarters, use Math.random to determine if they won.
//
// If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).
//
// Return 0 if all the quarters were wasted.
//
// Bonus (Only If You Have Time):
//
// Let the user pass the number they are willing to leave
// (ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)

var game = (quarters,leave=null) => {
  //generate a random number between 50 and 100
  var winnings = () => {
    return Math.trunc((Math.random() * 50) + 51);
  }

  var total = 0;

  //keep playing game until no quarters left
  while (quarters > 0){
    //generate a random number between 1 and 100 and test to see if it is 10
    if ((Math.trunc(Math.random()*100)+1) === 10) {
      total += winnings();
    }
    //if i included a leave value
    if (leave){
      //leave the table with the rest of my money
      if (quarters <= leave){
        break;
      }
    }
    quarters--;
  }
  console.log(quarters);
}

game(40);
