## with cofeescript just for fun!
# Countdown By Fours
# Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

# start = 2016
#
# while start > 0
#   console.log start
#   start -= 4

# in plain JS because for loops don't exist in CoffeeScript
#
# function flexCount(high,low,mult){
#   for (var i = high; i < low; i+= mult){
#     console.log(i);
#   }
# }
# The Final Countdown
# This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) that one. Do this using a WHILE loop.
#
# Example: Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, except for the value 9).

finalCount = (param1,param2,param3,param4) ->
  start = param1 * (param2 % param1)
  while start < param3
    if start != param4
      console.log start
    start += param1
finalCount(3,5,17,9)
