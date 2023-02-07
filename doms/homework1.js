//declare constant variables

const head = document.head
const body = document.body


const webTitle = document.createElement('title')
webTitle.innerText = "Dom Lesson 1 homework"

head.append(webTitle)


const title = document.getElementById('title')
title.innerText = "Lesson 1 is all about DOM manipulation"


const h3 = document.querySelector('h3')
h3.innerText = "Todays Date"



const date = document.createElement('h2')


//dd/mm/yyyy
var today = new Date()

const dd = today.getDate() 
const mm = today.getMonth()+1
const yy = today.getFullYear() 

date.innerText = `${dd}/${mm}/${yy}`


const list = document.createElement('ol')
const h5 = document.createElement('h5')
h5.innerText = "Coding Languages I am currently learning"


const child1 = document.createElement('li')
child1.innerText = "HTML"

const child2 = document.createElement('li')
child2.innerText = "CSS"

const child3 = document.createElement('li')
child3.innerText = "Javascript"



list.append(h5)
list.append(child1)
list.append(child2)
list.append(child3)


const em = document.createElement('em')
em.innerText = "Page 1"

body.append(date)
body.append(list)
body.append(em)