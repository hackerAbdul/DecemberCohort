//declare my const variables

const body = document.body
const button = document.getElementById('btn-2')
const button1 = document.getElementById('btn-1')
const input = document.querySelector('input')
const headingButton = document.getElementById('new-heading')




button1.addEventListener('click', function(e){

    //when button is pressed I want to change the colour in h1
    const h1 = document.querySelector('h1')

    h1.style.color = "green"
})

button.addEventListener('click', function(e){
    button.innerText = "Button has been clicked"

    body.classList.toggle("toggle")
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

    const h2 = document.createElement('h2')
    h2.innerText = "New Heading Created"

    h2.style.backgroundColor = "blue"
    h2.style.color = "white"


    body.append(h2)

})

