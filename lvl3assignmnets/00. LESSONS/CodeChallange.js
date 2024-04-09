
const palindrome = (word) => {
    const wordArray = word.split("").reverse().join("")

    return wordArray === word

}
console.log(palindrome("racecar"))
console.log(palindrome("tacocat"))
console.log(palindrome("football"))
console.log(palindrome("baseball"))
