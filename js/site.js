function getString() {

    let userInput = String(document.getElementById('userInput').value);

    if(typeof(userInput) === "string") {

        let acceptedLetters = /[^a-z]/g;
        let verifiedString = userInput.toLowerCase().replace(acceptedLetters, '');
        let output = checkPalindrome(verifiedString);

        displayResults(output, userInput);

    }
    else {
        alert("Error: Please enter a string");
    }
    
}

function checkPalindrome(verifiedString) {

    let reversedArray = [];
    let startString = verifiedString
    let isPalindrome = false;

    for(let i = verifiedString.length - 1; i >= 0; i--) {
        
        reversedArray += verifiedString[i];
1
    }

    let endString = reversedArray.toString();

    if(startString === endString) {

        isPalindrome = true;

    }

    return { endString, isPalindrome };
}

function displayResults(output, userInput) {
    
    let palindrome = document.getElementById('palindrome');
    let palindromeResults = document.getElementById('results-palindrome');

    let string = document.getElementById('word');
    let wordResults = document.getElementById('results-non-palindrome');

    if(output.isPalindrome === true) {

        wordResults.style.display = "none";

        palindromeResults.style.display = "block";
        palindrome.innerHTML = `${output.endString} is a palindrome!`;

    }   
    else if (output.isPalindrome === false) {

        palindromeResults.style.display = "none";

        wordResults.style.display = "block";
        string.innerHTML = `${userInput} is not a palindrome!`;

    }
    

}