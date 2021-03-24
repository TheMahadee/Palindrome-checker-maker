function makePalindrome(number) {
    let num = parseInt(number)
    let palindrome = num

    while (num > 0) {
        palindrome = palindrome * 10 + num % 10
        num = parseInt(num / 10)
    }

    return { result: "Palindrome form: " + palindrome, given: "Input: " + number }
}

module.exports = makePalindrome