var name = "john"
var age = 43


// console.log("Hello" + " " + "John");
// console.log("Hello "+name)

//string concatenation example

// console.log("Hi my name is " + name + " and I am " + age + " years old")

// //Number concatenation example

// console.log(2+2+5+678+5+3)


//More variables

var today;

let tomorrow = "Sunday"
// console.log(tomorrow)
const myName = "smith"


/*Datatypes

-string
-number
-object
-undefined
-null
*/

function obj(){
    //
}

var array = ["oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,81,321,68,13,513,2168,1,231,6,13,21320,351501,65]



console.log("The number of items in this list is " + array.length)

// console.log(array)

//deleting the LAST item from the list

array.pop()

console.log("The number of items in this list is " + array.length)

// console.log(array)

//adding items in the list at the last position

array.push("juice")

console.log("The number of items in this list is " + array.length)

//reassigning items in the list

array[0] = "cheese"
array[0] = "ice"
array[1] = "pears"
array[2] = "oranges"
array[array.length-2] = "pineapples"

console.log(array)