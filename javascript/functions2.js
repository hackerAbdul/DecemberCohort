//how can we obtain info inside of functions


var name = "abdul"


function dummy(){
    const name = "adam"
    return name;
}

var name2 = dummy()



function numbers(number1,number2){
    var result = (number1*number2)/2
    const name = "abdulkadir"
    //console.log(result)
    return number1+number2;
}

var answer = numbers(15,30)

if (typeof answer === "number"){
    //console.log(answer)
}else{
    console.log(`the variable inside answer is a string: ${answer}`)
}

//----------------------------------------------------------------------



function list(){
    var array = ["cheese", "butter","milk"]
    return array
}

function item(param){

    if(typeof param === "string"){
        param = 0
    }


    var list = ["oranges", "apples", "pears"]
    return list[param]
}


var storeItem = item(2)

var array = list()

array.push(storeItem)

console.log(array)


// var array = ["cheese", "butter","milk"]

// var list = ["oranges", "apples", "pears"]

// array.push(list[2])

// console.log(array)