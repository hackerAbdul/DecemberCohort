const a = 10213
const b = 10

var c = 10
var d = 14

if (typeof a === "number" && typeof b === "number" && typeof c ===  "number" && typeof d === "number"){
    addition(c,d)
    subtraction(a,b)
    multiplication(a,b)
    division(a,b)
}else{
    console.log("variable a and variable have to be a number")
}

function addition(number1,number2){
    const name = "abdul"
    console.log(number1+number2)
}

function subtraction(number1,number2){
    const name = "adam"
    console.log(number1-number2)
}

function multiplication(number1,number2){
    const name = "ahmed"
    console.log(number1*number2)
}

function division(number1,number2){
    const name = "zein"
    console.log(number1/number2)
}


