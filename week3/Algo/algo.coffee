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

# finalCount = (param1,param2,param3,param4) ->
#   start = param1 * (param2 % param1)
#   while start < param3
#     if start != param4
#       console.log start
#     start += param1
# finalCount(3,5,17,9)
#
# Countdown
# Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zero’th element) down to 0 (as the last element). How long is this array?
#
# countdown = (high) ->
#   num for num in [high..0]
#
# console.log countdown(10)

# Print and Return
# Your function will receive an array with two numbers. Print the first value, and return the second.

# printreturn = (num1,num2) ->
#   console.log num1
#   num2
#
# test = printreturn(2,3) #prints 2
# console.log test #prints 3


# First Plus Length
# Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

# firstplustlength = (array) ->
#   if typeof array[0] == 'number'
#     array[0] + array.length
#   else
#     console.log "Error, your array contains something other than numbers"
#
# console.log firstplustlength [1,2,3,4]
# console.log firstplustlength [true,false,1,2]
#
# Values Greater than Second
# For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

# val_greater_than_second = (array) ->
#   second = array[1]
#   counter = 0
#   for num in array
#     if num > second
#       counter++
#       console.log num
#   counter
#
# console.log val_greater_than_second [1,3,5,7,9,13]
