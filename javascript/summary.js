

var action = "subtract"
var Number1 = 2
var Number2 = 27

switch(action.toLowerCase()){
    case "add":
        var res = Number1+Number2
        console.log("The two numbers combined are " + res)
        break;
    case "subtract":
        if(Number1>Number2){
            var res = Number1-Number2
        }else{
            var res = Number2-Number1
        }
        console.log("The two numbers combined are " + res)
        break;
    case "multiply":
        var res = Number1*Number2
        console.log("The two numbers combined are " + res)
        break;
    case "divide":
        var res = Number1/Number2
        console.log("The two numbers combined are " + res)
        break;
    default:
        console.log("Sorry that action I do not recognise")
        break;
}