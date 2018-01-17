/*Fancy Array
Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

[ "James", "Jill", "Jane", "Jack" ]
Let's make it look fancy! Write a function that will make it print like:

0 -> James
1 -> Jill
2 -> Jane
3 -> Jack
Bonus (Only If You Have Time):

Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
Have an extra parameter reversed. If the user passes true, print the elements in reverse order*/

function fancyArray(array,style="->",reverse=false){
  var temp = array;
  if (reverse){
    for (var i = (array.length-1); i >= 0; i--){
      temp.push(array[i]);
    }
  }
  array = temp;
  for (var i = 0; i < array.length; i++){
    console.log(i + " " + style + " " + temp[i]);
  }
}

fancyArray([1,2,3,4,],"=>");
