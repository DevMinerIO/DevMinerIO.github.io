let numberOne = parseInt(document.getElementById("numberOne").value);
let numberTwo = parseInt(document.getElementById("numberTwo").value);
let numberThree = parseInt(document.getElementById("numberThree").value);
let numberFour = parseInt(document.getElementById("numberFour").value);
let total = numberOne + numberTwo + numberThree + numberFour;
let average = total / 4;
let currentMinNumber = 300;
let currentMaxNumber = -300;
let evenCounter = 0;
let oddCounter = 0;


document.getElementById("nameButton").onclick = function printName() {
    let myName = document.getElementById("nameInput").value;
    console.log("hello", myName);
    if (myName === '') {
        myName = "The BATMAN";
        return document.getElementById("welcome").innerHTML = "Hello to " + myName + ", Only Bruce Wayne would try and keep their identity a secret";
    } else {
        return document.getElementById("welcome").innerHTML = "Hello " + myName + ", thank you for taking the time to look though my resume." +
            " I hope you have a great day!";
    }

}

//Cant have on click events that point to the same id, will override, with the last one taking priority.
document.getElementById("numberGameButton").onclick = function doMath() {
    numberOne = parseInt(document.getElementById("numberOne").value);
    numberTwo = parseInt(document.getElementById("numberTwo").value);
    numberThree = parseInt(document.getElementById("numberThree").value);
    numberFour = parseInt(document.getElementById("numberFour").value);
    total = numberOne + numberTwo + numberThree + numberFour;
    average = total / 4;
    document.getElementById("average").innerHTML = average;

    //array to find max and min numbers
    const allNumbers = [numberOne, numberTwo, numberThree, numberFour];
    for (let i = 0; i < allNumbers.length; i++) {
        if (allNumbers[i] < currentMinNumber) {
            currentMinNumber = allNumbers[i];
        }
        if (allNumbers[i] > currentMaxNumber) {
            currentMaxNumber = allNumbers[i];
        }
    }
    document.getElementById("min").innerHTML = currentMinNumber;
    document.getElementById("max").innerHTML = currentMaxNumber;
    //reseting values for max and min so it updates on each onclick event to the current values. 
    currentMinNumber = 300;
    currentMaxNumber = -300;

    //for loop to count the number of odd and even numbers in the sum. 
    for (let l = 0; l <= total; l++) {
        if (l % 2 === 0) {
            evenCounter++;
        } else {
            oddCounter++;
        }
    }
    document.getElementById("evenCounter").innerHTML = evenCounter;
    document.getElementById("oddCounter").innerHTML = oddCounter;
    //resetting counters
    evenCounter = 0;
    oddCounter = 0;


    return document.getElementById("sum").innerHTML = total;
}



document.getElementById("sum").innerHTML = total;
document.getElementById("average").innerHTML = average;

