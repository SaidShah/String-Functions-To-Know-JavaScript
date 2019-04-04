const str1 = "hello world this is a long sentence we will use to test the method"
const str2 = "hello world"
const str3 = "This is another Long String To Use Z WHile we are PLaying With Some methods"
const str4 = "hello hello world this is a test string hello is a test test string is"

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

// 6) .repeat => repeats a string a given number of times, takes in a integer

console.log(str2.repeat(2)) // splits to each letter
console.log(str2.repeat(6))// splits string at the o's, does not include the o's
console.log(str2.repeat(11))// splits the string at the empty spaces

// 7) .charAt => return the character at a given index

console.log(str1.charAt(13)) // should return h
console.log(str2.charAt(4))// should return o
console.log(str3.charAt(54))// should return g

// 8) .match => returns an array of matching strings, because we are using a global regex

console.log(str4.match(/hello/g))
console.log(str3.match(/[A-Z]/g))
console.log(str4.match(/is/g))

// 9) .slice => returns every string after the index provided until the end or next index provided, accepts 1 or 2 integers

console.log(str1.slice(56))//  the method
console.log(str2.slice(-5))// world
console.log(str3.slice(5,23))// is another Long St

// 10) .replace => returns every string after the index provided until the end or next index provided, accepts 1 or 2 integers

console.log(str1.replace(/hello/g,"cheese cake"))//  should replace every instance of hello with cheese cake
console.log(str1.replace(/l/g,"$$$$$"))// should replace every l with $$$$$
console.log(str3.replace(/[A-Z]/g,"*"))// should replace every capital letter with *

// 11) .indexOf => returns the index of a given character in a string

console.log(str1.indexOf("this"))//  should return 12
console.log(str1.indexOf("l"))//  should return 2
console.log(str3.indexOf("Use"))// should return 31
