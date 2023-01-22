//Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).

// var hero = "ww"

// if (hero.toLowerCase() === "superman" || hero.toLowerCase() === "batman" || hero.toLowerCase() === "flash" || hero.toLowerCase() === "ww"){
//     console.log(`${hero.toLowerCase()} is a dc character`)
// }else if(hero.toLowerCase() === "spiderman"){
//     console.log(`${hero.toLowerCase()} is a marvel character`)
// }else{
//     console.log("I dont know this hero")
// }

/*write a conditional statement taking age as variable and what year group they will be in a school 
(i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education).*/

// var age = 12312312

// if(typeof age === "number"){
//     if (age>=11 && age<16){
//         console.log("You are in secondary school")
//     }else if (age>=16 && age<18){
//         console.log("You are in college")
//     }else if (age>=5 && age<11){
//         console.log("You are in primary school")
//     }else if (age>=2 && age<5){
//         console.log("You are in pre-school")
//     }else if(age>=120){
//         console.log("Not possible")
//     }else{
//         console.log("This is optional education")
//     }
// }else{
//     console.log("Age cannot be anything except for a Number")
// }

/*Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. 
if above 5 print out error and if less than 5 print out error.*/

// var abdul = ["fruits", "butter", "milk", "cheese"]

// if (abdul.length === 5){
//     console.log("Spot on")
// }else if(abdul.length>5){
//     console.log("error above 5")
// }else{
//     console.log("error less than 5")
// }


//Write a conditional statement that takes into consideration validations (i.e case sensitivity). this will be entire up to you as to what the conditional statement is on.

//Write a conditional statement that prints whether the phone being used is an Iphone or an android

// var phone = "IphONe"

// if (phone.toLowerCase() === "iphone"){
//     console.log(`This is an ${phone}`)
// }else if(phone.toLowerCase() === "samsung"){
//     console.log(`This is an ${phone}`)
// }else{
//     console.log("I only know these 2")
// }



//---------------------------------------------------------------


// var hero = "ww"

// if (hero.toLowerCase() === "superman" || hero.toLowerCase() === "batman" || hero.toLowerCase() === "flash" || hero.toLowerCase() === "ww"){
//     console.log(`${hero.toLowerCase()} is a dc character`)
// }else if(hero.toLowerCase() === "spiderman"){
//     console.log(`${hero.toLowerCase()} is a marvel character`)
// }else{
//     console.log("I dont know this hero")
// }


// var hero = "ww"

// switch(hero.toLowerCase()){
//     case "ww":
//         console.log(`${hero.toLowerCase()} is dc character`)
//         break;
//     case "superman":
//         console.log(`${hero.toLowerCase()} is dc character`)
//         break;
//     case "flash":
//         console.log(`${hero.toLowerCase()} is dc character`)
//         break;
//     case "batman":
//         console.log(`${hero.toLowerCase()} is dc character`)
//         break;
//     case "robin":
//         console.log(`${hero.toLowerCase()} is dc character`)
//         break;
//     case "joker":
//         console.log(`${hero.toLowerCase()} is dc character`)
//         break;
//     case "spiderman":
//         console.log(`${hero.toLowerCase()} is marvel character`)
//         break;
//     case "hulk":
//         console.log(`${hero.toLowerCase()} is marvel character`)
//         break;
//     case "captain america":
//         console.log(`${hero.toLowerCase()} is marvel character`)
//         break;
//     case "thor":
//         console.log(`${hero.toLowerCase()} is marvel character`)
//         break;
//     default:
//         console.log("I dont know that hero")
//         break;
// }


var myDaysOfTheWeek = "abdul"

if (typeof myDaysOfTheWeek === "string"){
    switch(myDaysOfTheWeek.toLowerCase()){
        case "monday":
            console.log("Work and lesson plan")
            break;
        case "tuesday":
            console.log("Work and lesson")
            break;
        case "wednesday":
            console.log("Work and lesson plan presentation")
            break;
        case "Thursday":
            console.log("Work")
            break;
        case "friday":
            console.log("work & go out")
            break;
        case "saturday":
            console.log("lesson & family")
            break;
        case "sunday":
            console.log("chill")
            break;
        default:
            console.log("that day does not exist")
            break;
    }
}else{
    console.log("Days can only be a string")
}