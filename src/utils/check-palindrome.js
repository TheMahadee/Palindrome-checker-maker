function checkPalindrome(number) {
    const given = parseInt(number)
    let reverse = 0
    let copy = given

    do {
        const current = copy % 10
        reverse = (reverse * 10) + current
        copy = parseInt(copy / 10)
    } while (copy !== 0)

    if (given === reverse) {
        return { result: "Given number is a palindrome number", given: "Input: " + given }
    } else {
        return { result: "Given number is not a palindrome number", given: "Input: " + given }
    }
}

module.exports = checkPalindrome