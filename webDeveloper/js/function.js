// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//refactor (Teacher's code)
function isEven(num) {
    return num % 2 === 0;
}


// function factorial(number) {
//     if (number === 0 ) {
//         return 1;
//     }
//     else {
//         return number * factorial(number-1);
//     }
// }

//refactor (Teacher's code)
function factorial(number) {
    let result = 1;
    for ( let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}



function KebabToSnake(string) {
    if (string.includes("-")) {
        return string.replace(/-/g,"_");
        // /-/g 加一個g是因為 global ; /-/gi 多加一個i 大小寫皆視為相同會被修改
    }
    else {
        return string;
    }
}