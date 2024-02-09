// 1 задание 

let userAge = prompt("Введите свой возраст")

if(userAge >= 0 && userAge < 2){
    alert("Вы ребенок")
} else if(userAge >= 12 && userAge < 18){
    alert("Вы подросток")
} else if(userAge >= 18 && userAge < 60){
    alert("Вы взрослый")
} else if(userAge > 60){
    alert("Вы пенсионер")
}

// 2 задание

let numInRange = prompt("Введите число в диапозоне от 0 до 9")

if(numInRange < 0 || numInRange > 9){
    alert("Выберите в указаном диапозоне!!!!!!!!!!!!!!!!!!!!")
} else{
    if(numInRange === 0){
        alert(")")
    } else if(numInRange === 1){
        alert("!")
    } else if(numInRange === 2){
        alert("@")
    } else if(numInRange === 3){
        alert("#")
    } else if(numInRange === 4){
        alert("$")
    } else if(numInRange === 5){
        alert("%")
    } else if(numInRange === 6){
        alert("^")
    } else if(numInRange === 7){
        alert("&")
    } else if(numInRange === 8){
        alert("*")
    } else if(numInRange === 9){
        alert("(")
    }
}


// 3 задание 

let number = prompt("Введите трехзначное число:");
if (number.length !== 3) {
    alert("Пожалуйста, введите трехзначное число.");
} else {
    let firstDigit = number[0];
    let secondDigit = number[1];
    let thirdDigit = number[2];

    if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
        alert("В числе есть одинаковые цифры.");
    } else {
        alert("В числе нет одинаковых цифр.");
    }
}