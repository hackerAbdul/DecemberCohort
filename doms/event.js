//declare my const variables

const body = document.body
const button = document.getElementById('btn-2')
const button1 = document.getElementById('btn-1')
const input = document.querySelector('input')
const headingButton = document.getElementById('new-heading')
const h1 = document.querySelector('h1')





button1.addEventListener('click', function(e){

    //when button is pressed I want to change the colour in h1
    const h1 = document.querySelector('h1')

    h1.style.color = "green"
})

button.addEventListener('click', function(e){
    button.innerText = "Button has been clicked"

    h1.classList.toggle('colourChange')
})




input.addEventListener('keypress', function(e){

    // if(input.value.length === 10){
    //     console.log("max length has been reached")
    //     alert(`hello ${input.value}`)
    // }else{
    //     console.log(input.value)
    // }

    console.log(input.value)
    
})

//create new heading event listener

headingButton.addEventListener('click', function(e){

    //create heading variable
    form.classList.toggle('display')
    

})

//------------------------
const form = document.querySelector('form')







// function submissionForm(e){

//     e.preventDefault()

//     const input1 = document.getElementById('first')
//     const input2 = document.getElementById('last')
//     const ageInput = document.getElementById('age')
    

//     var first = input1.value.trim()
//     var last = input2.value.trim()


    
    
//     var age = Age(ageInput.value)
//     console.log(age)


//     if (first.length !=0 && last.length != 0 && age === true){
//         alert("form has been submitted")
//         console.log(`${first} ${last}`)
//     }else{
//         alert("First Name & last name cannot be empty")
//         console.log(`${first} ${last} & age cannot be a string`)
//     }



    
// }

function Age(param){
    const checker = /^[0-9]+$/;
    var ageInputted = checker.test(param)

    return ageInputted
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const input1 = document.getElementById('first')
    const input2 = document.getElementById('last')
    const ageInput = document.getElementById('age')
    

    var first = input1.value.trim()
    var last = input2.value.trim()


    
    
    var age = Age(ageInput.value)
    
    
    console.log(age)


    if (first.length >= 2 && first.length <= 8 && last.length >= 2 && last.length <= 8 && age === true){
        alert("form has been submitted")
        console.log(`${first} ${last}`)
    }else{
        alert("First Name & last name cannot be empty")
        console.log(`${first} ${last} & age cannot be a string`)
    }
})

const list = document.querySelector('ul')
const addCarButton = document.getElementById('add-car')

addCarButton.addEventListener('click', function(e){

    var result = prompt("what is the name of the car you want to add?")
    console.log(result)
    

    const child = document.createElement('li')
    child.innerText = result

    //check the list, see if car is already in there if not then append the car to the list

    

    for (let i=0; i<list.children.length; i++){
        console.log(list.children[i].innerText)

        if (list.children[i].innerText.toLowerCase() === result.toLowerCase()){
            alert(`${result} is already in the list`)
            return false
        }
    }

    list.append(child)


})

const removeCarButton = document.getElementById('remove-car')

removeCarButton.addEventListener('click', function(e){

    var result = prompt("which car would you like to remove?")
    console.log(result)


    for (let i=0; i<list.children.length; i++){
        console.log(list.children[i].innerText)

        if (list.children[i].innerText.toLowerCase() === result.toLowerCase()){
            list.children[i].remove()
        }
    }


})