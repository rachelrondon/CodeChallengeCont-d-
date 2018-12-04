// 1. Is Palindrome: Write a function that determines if a string is a palindrome

/* A string is a palindrome if it the same written from front to back and back to front */
let string = "madam";

let solutionOne = () => {
  if (string.split('').reverse().join('') === string) {
    console.log('true');
  } else {
    console.log('false');
  }
}

solutionOne(string);


let reverseString = '';

let solutionTwo = () => {
 for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  } if (string === reverseString) {
    console.log('true');
  } else {
    console.log('false');
  }
}

solutionTwo(string);




// 2. Repeatify: write a function called "Repeatify" that takes a string and a number
// The number specifies how many times the string should be repeated



// 3. Largest Number: write a function that finds the largest integer within an array

// 4. Odds/Evens: write a function that separates the odd and even numbers

// 5. Simple Array Sum: Given an array, find the sum of the integers

// 6. isPrime: write a function to determine if a number is prime

// 7. Largest difference: Find the greatest possible difference between two numbers in a set (all unique) of numbers
  // This is how you find the largest difference using the built-in JavaScript methods Math.max and Math.min


// 8. twoSum: Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.


// 9. reverse a string
