function getString() {

    

    let userInput = String(document.getElementById("userInput").value);

    let returnObj = checkForPalindrome(userInput);

    displayMessage(returnObj)

}

function checkForPalindrome(userInput) {

    userInput= userInput.toLowerCase();
    
    let regex = /[^a-z0-9]/gi;
    userInput= userInput.replace(regex, "");

    let reversedString = [];
    let returnObj = {};

    for (let index = userInput.length - 1; index >= 0; index--) {
        reversedString += userInput[index];
    }

    if(reversedString === userInput) {
        returnObj.msg = "Well done! You entered a palindrome";
    } 
    else {
        returnObj.msg = "Sorry! You did not enter a palindrome"
    }

    returnObj.reversed = reversedString;

    return returnObj;

}

function displayMessage(returnObj) {

    document.getElementById("alertHeading").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    if(returnObj.msg === "Well done! You entered a palindrome") {
        document.getElementById('alert').classList.remove("alert-danger");
        document.getElementById('alert').classList.add("alert-success");
        document.getElementById("alert").classList.remove("invisible");
    }
    if(returnObj.msg === "Sorry! You did not enter a palindrome") {
        document.getElementById('alert').classList.remove("alert-success");
        document.getElementById('alert').classList.add("alert-danger");
        document.getElementById("alert").classList.remove("invisible");
    }

}