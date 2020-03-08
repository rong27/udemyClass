let age = Number(prompt("How old are you?"));
let checkIfSquareAge = Math.sqrt(age);

if (age <= 0) {
    console.log("your age can not be negative!")
}

else if (age === 21) {
    console.log("happy 21st birthday!!")
}

else if (age !== 21 && age % 2 === 1) {
    console.log("your age is odd!")
}

else if (Number.isInteger(checkIfSquareAge)===true){
    console.log("perfect square!")
}

else {
    console.log("you are " + age + " years old!")
}