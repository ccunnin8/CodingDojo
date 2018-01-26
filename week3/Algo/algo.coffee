## with cofeescript just for fun!
# Countdown By Fours
# Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

# start = 2016
#
# while start > 0
#   console.log start
#   start -= 4

# in plain JS because for loops don't exist in CoffeeScript

function flexCount(high,low,mult){
  for (var i = high; i < low; i+= mult){
    console.log(i);
  }
}
