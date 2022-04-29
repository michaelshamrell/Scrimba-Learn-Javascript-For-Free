Describe: numberValidator()

Test: "Isolate every other number in an array of numbers."
Code: 
let cc = '4102080860435620';
console.log(cc.substring(1, 3, 5, 7, 9, 11, 13, 15))
Expected Output: 12880360

Test: "Multiply every other number by 2, once seperated into its own array"
Code: 

const doubledArray = array.map(function(array) {
  return array * 2
})
Expected Output: 24(16)(16)06(12)0




NOTE:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter out all elements that are located at an even index in the array.

let x = arr.filter((element, index) => {
  return index % 2 === 0;
})

console.log(x)
// [1, 3, 5, 7, 9]

Returns every other element in index - even:

let doubleEveryOtherArr = arr.filter((element, index) => {
  return index % 2 === 1;
})

Selects double digit numbers, and adds together each digit to update the number at that index:

let doubleDigitArr = arr.filter((element))

Justice Notes:
1) let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
2) let arr = [2, 4, 6, 10, 12, 14, 16, 18, 20];
3) let everyOtherArr = [4, 10, 14, 18]; && let arr = [2, 6, 12, 16, 20];
4) let everyOtherArr = [4, 1, 5, 9]; && let arr = [1, 3, 6, 8, 10];
5) sum(everyOtherArr) + sum(arr) = 47
6) Invalid




if else statement to get around 2 digit numbers when multiplied
Describe: Sructure of an if statement that lives inside mulitpier function
code : 

if (x < 5) {
  x * 2
<!-- } else if (x > 6) {
  x + 1 -->
} else {
  x = 0
}