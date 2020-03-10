let answer = prompt("Are we there yet? ");

// while (answer !== "yes" && answer !== "yeah") {
//     let answer = prompt("Are we there yet? ");
// }
// alert("Yay, we finally made it!")
 
while (answer.indexOf("yes") === -1) {
    let answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!")