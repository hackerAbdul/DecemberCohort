function datatype(param){
    console.log(typeof param)
}

var a = 123
datatype(a);


//----------------------

function list(){
    array = ["pens", "pencils", "books"]


    return array
    
}

var list = list();

console.log(`items in the variable list are ${list}`)


function phone(param){


    if (param.toLowerCase() === "iphone"){
        console.log(`${param} is made by apple`)
    }else if (param.toLowerCase() === "pixel"){
        console.log(`${param} is made by google`)
    }else (
        console.log(`${param} is made by samsung`)
    )

}

phone("iphone")


function grade(grade,name){

    switch(true){
        case grade>90:
            console.log(`${name} has achieved an A*`)
            break;
        case grade > 80 && grade <=90:
            console.log(`${name} has achieved an A`)
            break;
        default:
            console.log(`${name} has achieved a less than 80`)
            break;
    }

}

grade(90,"abdul")


var array = [1531315351355135,34,102,51,31,61,684,31,8,13,43,20,81,321,68,13,513,2168,1,231,6,13,21320,351501,65]
var array2 = [1,34,102,51,31,61,684,31,8,13,43,20,81,321,68,13,513,2168,1,231,6,13,21320,351501,65]
var array3 = [1,34,102,51,31,61,684,31,8,13,43,20,81,321,68,13,513,1,231,6,13,65]

function loop(param){

    let largest = 0

    for (let i=0; i<param.length; i++){
        if(param[i] > largest){
            largest = param[i]
        }
    }

    console.log(`the largest item in the list is ${largest}`)
}


loop(array)
loop(array2)
loop(array3)


var array4 = ["oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "hat", "T-shirt", "shirt", "Jacket","oranges", "apples", "pineapple", "banana", "grapes","abdul","oranges", "apples", "pineapple", "banana", "grapes",1531315351355135,34,102,51,31,61,684,31,8,13,43,20,
81,321,68,13,513,2168,1,231,6,13,21320,351501,65,"Socks", "Jeans", "Shoes", "bat", "T-shirt", "shirt", "Jacket","oranges", "bat", "pineapple", "banana", "grapes"]

function checkForItem(param,item){


    for (let i=0; i<param.length; i++){

        if (param[i] === item.toLowerCase()){
            console.log(`found the item ${item} at position ${i}`)
        }
    }



}

checkForItem(array4, "abdul")
