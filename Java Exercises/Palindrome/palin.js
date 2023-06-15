function palindrome(myString) {

    var removeChar = myString.replace(/[^A-z0-0]/ig, "").toLowerCase();

    var checkPalindrome = removeChar.split('').reverse().join('');

    if(removeChar === checkPalindrome){

        document.write("<div>"+ myString + "is a Palindrome </div>");     
    } else {

        document.write("<div>" + myString + "is not a Palindrome </div>");
    }
}
palindrome(`"Oh who was it i saw, oh who?"`)
palindrome(`"Madam"`)
palindrome(`"Star Wars"`)
palindrome(`"2, 3, 4, 3, 2`)
palindrome(`"7, 10, 7, 8, 9"`)
