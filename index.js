const str1 = "hello world this is a long sentence we will use to test the methods"
const str2 = "hello world"
const str3 = "This is another Long String To Use WHile we are PLaying With Some methods"

// 1)  .length => you can use the .length method to get the length of a given string

console.log(str1.length) // should log 67
console.log(str2.length) // should log 11
console.log(str3.length) // should log 73

// 2) .toUpperCase => makes the entire string upper case

console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

// 3) .toLowerCase => makes the entire string lower case

console.log(str1.toLowerCase())
console.log(str2.toLowerCase())
console.log(str3.toLowerCase())

// 4) .includes => return true or false if the given string includes another string

console.log(str1.includes("world")) // should return true
console.log(str2.includes("peanuts"))// should return false
console.log(str3.includes("Use"))// should return true

// 5) .split => converts the string to an array, it takes in(accepts) a separator

console.log(str1.split("")) // splits to each letter
console.log(str2.split("o"))// splits string at the o's, does not include the o's
console.log(str3.split(" "))// splits the string at the empty spaces
