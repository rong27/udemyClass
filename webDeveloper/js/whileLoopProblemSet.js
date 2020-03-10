let startNumber_1 = -10;
let startNumber_2 =  10;
let startNumber_3 =  300;
let startNumber_4 = 5;

console.log("Q1 answer: \n")
while (startNumber_1 <= 19) {
    console.log(startNumber_1)
    startNumber_1 += 1
}

console.log("\nQ2 answer: ")
while (startNumber_2 <=40) {
    if (startNumber_2 % 2 ===0) {
        console.log(startNumber_2)
    }
    startNumber_2 ++
}

console.log("\nQ3 answer: ")
while (startNumber_3 <=333) {
    if (startNumber_3 % 2 ===1) {
        console.log(startNumber_3)
    }
    startNumber_3 ++
}

console.log("\nQ4 answer: ")
while (startNumber_4 <=50) {
    if (startNumber_4 % 5 ===0 && startNumber_4 % 3 ===0) {
        console.log(startNumber_4)
    }
    startNumber_4 ++
}