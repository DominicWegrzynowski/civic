function getString() {

    document.getElementById("alert").classList.add("invisible");

    let userInput = String(document.getElementById("userInput").value);

    let returnObj = checkForPalindrome(userString);

    displayMessage(returnObj)

}

function checkForPalindrome(userString) {

    userString = userString.toLowerCase();
    
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let reversedString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        reversedString += userString[index];
    }

    if(reversedString === userString) {
        returnObj.msg = "Well done! You entered a palindrome";
    } 
    else {
        returnObj.msg = "Sorry! You did not enter a palindrome"
    }

    returnObj.reversed = reversedString;

    return returnObj;

}

function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}