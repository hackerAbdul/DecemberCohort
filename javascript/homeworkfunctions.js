//write a function that console logs “hello world”

function hello(){
    console.log("Hello world")
}

// hello();

// ------------------------

//Write a function that generates a random number use the math.random import

function randomNumberGenerator(param){
    var answer = Math.floor(Math.random() * param)
    // console.log(answer)
    return answer
}

var numberGenerated = randomNumberGenerator(100);
// console.log(numberGenerated);

//---------------------------

//write a function that combines multiple arrays together as 1 big array (you can use the .concat method for this )

function combined(array1,array2){

    var answer = array1.concat(array2)

    console.log(answer)
}

// combined([1,2,3],[4,5,6])

// -----------------------

//write a function that check if the number is an odd or even number

function oddOrEven(number){

    var answer = number%2

    console.log(answer)

    if (number%2 === 0){
        console.log(`${number} is even`)
    }else{
        console.log(`${number} is odd`)
    }

}

// oddOrEven(2186487326419);



// write a function that reverses the order of an array e.g 54326 = 62345

function reverse(abdul){

    // console.log(abdul)

    var str = abdul.toString()
    // console.log(str)

    var answer = str.split('')
    // console.log(answer)
    //[5,4,3,2,6]

    reversed = answer.reverse()

    // console.log(reversed)

    joined = reversed.join('')
    // console.log(joined)

    return joined

}

// palinAnswer = reverse("madam")

// console.log(palinAnswer);

//write a function to check if a string is a palindrome.

checkPalindrome("abdulkadir", reverse("abdulkadir"))

function checkPalindrome(word,var2){

    console.log(word)
    console.log(var2)
    


    if (word === var2){
        console.log(`${word} is a palindrome`)
    }else{
        console.log(`${word} is not a palindrome`)
    }

}