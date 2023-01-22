var name = "123"
var email

function validation(param){

    var answer = stringValidation(param)
    var result = stringLength(param)
    var emailAnswer = emailValidation(param)

    if (answer === true && result === true){
        console.log(`name ${param} meets the requirement`)
    }else{
        console.log(`${param} does not meet the requirement`)
    }

}

function stringValidation(name){
    const re = /^[a-zA-Z]+$/;
    return re.test(name)
}

function stringLength(name){
    console.log(name.length)
    if(name.length >= 2 && name.length<=10){
        var result = true
    }
    return result
}

validation(name)