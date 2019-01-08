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
let newString = '';

let repeatifyFunction = (string, number) => {
  return string.repeat(number);
}

repeatifyFunction("Rachel", 4)



let repeatify = (string, number) => {
  let newString = "";

  for (let i = 0; i < number; i++) {
    newString += string;
  }

  return newString;
}

repeatify('Rachel', 3)
// 3. Find The Largest Number: write a function that finds the largest integer within an array

let largestNumber = (array) => {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

largestNumber([1, 2, 3])


// Es6

let largestNumber = (theArray) => {
  let largest = theArray[0];
  theArray.forEach((number) => {
    if (number > largest) {
      largest = number;
    }
  })
  return largest;
}

largestNumber([1,5,3])

// 4. Odds/Evens: write a function that separates the odd and even numbers

let oddEvens = (numbers) => {
  let evens = "";
  let odds = "";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens += numbers[i];
    } else {
      odds += numbers[i];
    }
  }
  return `${evens}, ${odds}`;
}
oddEvens([5,1,2,3,6])

// Es6
let oddEvens = (numbersArray) => {
  let evens = '';
  let odds = '';
  numbersArray.forEach((number) => {
    if (number % 2 === 0) {
      evens += number;
    } else {
      odds += number;
    }
  })
  return `${evens}, ${odds}`;
}

oddEvens([1,2,3,4,5]);

// 5. Simple Array Sum: Given an array, find the sum of the integers
let theNumbers = [1,2,3,4];

let findSum = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum(theNumbers)


// es6
let findSum = (numbers) => {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  })
  return sum;
}
findSum(theNumbers)

// 6. isPrime: write a function to determine if a number is prime

let isPrime = (number) => {
  if (number === 2) {
    return true;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i !== 0) {
        return true;
      } else if (number === 1 * i) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(2)

// 7. findDifference: Find the greatest possible difference between two numbers in a set (all unique) of numbers
  // This is how you find the largest difference using the built-in JavaScript methods Math.max and Math.min


  let findDifference = (numbersArray) => {
    let largest = numbersArray[0];
    let smallest = numbersArray[0];

    numbersArray.forEach((number) => {
      if (number > largest) {
        largest = number;
      }
    });

    numbersArray.forEach((numberTwo) => {
      if (numberTwo < smallest) {
        smallest = numberTwo;
      }
    })
    return largest - smallest;
  }

  findDifference([9,1,2,4]);

// 8. twoSum: Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.


let twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
      }
    }
  }
}


twoSum([1,2,3,4], 3);

// 9. reverse a string

let reverseString = (string) => {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

reverseString('Rachel');



// 10. iterate over an array of numbers and print the sum of all of the numbers

var numbers = [1,2,3,4,5];
let sum = 0;

numbers.forEach((number) => {
    sum += number;
})

sum;

// alternate version
var numbers = [1,2,3,4,5];
let sum = 0;
let addNumbers = (number) => {
  sum += number;
}
numbers.forEach(addNumbers);
sum;


// 11.  HackerRank - Simple Array Sum

let simpleArraySum = (n, ar) => {
  let sum = 0;
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  console.log(sum);
}

simpleArraySum(6, [1,2,3,4,10,11])

// format for HackerRank

function simpleArraySum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}


// 12. HackerRank: a very big sum
// calculate and print the sum of elements in an array, keeping in mind that some of those integers may be quite largest

function aVeryBigSum(ar) {
  var sum = 0;

  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}


// 13. HackerRank: plus minus
// calculate the fractions of its elements that are positive, negative, and are zeros

function plusMinus(arr) {
  let arrTotal = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount += 1;
    } else if (arr[i] % 2 === 0) {
      positiveCount += 1;
    } else {
      negativeCount += 1;
    }
  }
  let newPostiveCount = positiveCount / arrTotal;
  let newNegativeCount = negativeCount / arrTotal;
  let newZeroCount = zeroCount / arrTotal;
  return `${newPostiveCount}, ${newNegativeCount}, ${newZeroCount}`
}

plusMinus([-4, 3, -9, 0, 4, 1])


// 14. Diagonal Difference
// return an integer representing the absolute diagonal difference

function diagonalDifference(arr) {
  let sum = 0;
  let secondSum = 0;
  for (var i = 0; i < arr.length; i++) {

  }

  for (var i = 0; i < )

}

diagonalDifference([11,2,4,4,5,6,10,8,-12])



// 15. Min-Max Sum
// given an array of integers, print two space-separated integers on one line
function minMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  let largest = arr[0];
  let secondLargest = arr[0];
  let smallest = arr[0];
  let secondSmallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest) {
      largest = arr[i];
    }
    return largest;
  }
}

minMaxSum([1,2,3,4,5])


// isPalindrome - a word that can be written the same forward and backward
let isPalindrome = (word) => {
  if (word === word.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('madam')


// isPalindrome
let isPalindrome = (word) => {
  let wordReverse = '';

  for (let i = word.length - 1; i >= 0; i--) {
    wordReverse += word[i];
  }
  return wordReverse;
}

isPalindrome('madam');


// Repeatify: write a function called "Repeatify" that takes a string and a number
// The number specifies how many times the string should be repeated
let repeatify = (string, number) => {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3);

// Find The Largest Number: write a function that finds the largest integer within an array
let largestNumber = (array) => {
  let largest = array[0];

  array.forEach((number) => {
    if (number > largest) {
      largest = number
    }
  })
  return largest;
}

largestNumber([4,1,2,4,1]);


//  Odds/Evens: write a function that separates the odd and even numbers
let oddEvens = (array) => {
    let odds = '';
    let evens = '';

    array.forEach((number) => {
      if (number % 2 === 0) {
        evens += number
      } else {
        odds += number
      }
    })
    return `${odds}, ${evens}`
}

oddEvens([3,2,5,1,2]);


// simple array sum
let arraySum = (array) => {
  let sum = 0;

  array.forEach((number) => {
    sum += number;
  })
  return sum;
}

arraySum([1,2,3,4,5]);

// isPrime - check if a number is prime
//  A prime number is greater than 1
// A prime number only factors as 1 and itself
// 2 is the first prime number
let isPrime = (number) => {
  // check if the number is 2, since 2 is a prime number
  if (number === 2) {
    return true;
  // a prime number has to be greater than 1
  } else if (number > 1) {
  // start the for loop at 2 and stop at the number
    for (let i = 2; i < number; i++) {
  // if the number does not have a factor, it is prime
      if (number % i !== 0) {
        return true
      } else if ( number === 1 * i) {
        return false
      } else {
        return false;
      }
    }
  }
}

isPrime(2);

// findDifference: Find the greatest possible difference between two numbers in a set (all unique) of numbers

let findDifference = (array) => {
  let largest = array[0];
  let smallest = array[0];

  array.forEach((number) => {
    if (number > largest) {
      largest = number;
    }
  })

  array.forEach((theNumber) => {
    if (theNumber < smallest) {
      smallest = theNumber
    }
  })

  return largest - smallest;
}

findDifference([1,2,3,4,5]);

// twoSum: Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.
let twoSum = (array, target) => {
  array.forEach((number) => {
    array.forEach((otherNumber) => {
      if (number + otherNumber === target) {
        console.log(number, otherNumber);
      }
    })
  })
}

twoSum([1,2,3], 5);
