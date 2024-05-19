// 1. , 2.       minus
function addNumbers(a, b) {
    return a - b;
}

const first = addNumbers(5, 10);
console.log(first);

// 3.    umnosenie

function multiplyNumbers(c, d) {
    return c * d;
  }
  
  const product = multiplyNumbers(5, 10);
  console.log(product);

//   4.          delenie
function divideNumbers(e, f) {
    return e / f;
  }
  
  const result = divideNumbers(10, 2);
  console.log(result);

//   5.       number is even
function isEven(number) {
    return number % 2 === 0;
}

// 6.         number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(5));
console.log(isOdd(10));

// 7.            number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// 8.            max number
function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}

console.log(maxOfTwoNumbers(10, 5)); 
console.log(maxOfTwoNumbers(-3, -10));
// 9.                    min number
function minOfTwoNumbers(num1, num2) {
    return Math.min(num1, num2);
}

console.log(minOfTwoNumbers(10, 5));
console.log(minOfTwoNumbers(-3, -10));

// 10.             sum
function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));
console.log(sumOfArray([-3, 8, -2, 10]));
// 11.             average of an array of numbers
function averageOfArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

console.log(averageOfArray([1, 2, 3, 4, 5])); 
console.log(averageOfArray([-3, 8, -2, 10]));
// 12                median of an array of numbers
function medianOfArray(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const len = sortedArr.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
        return sortedArr[mid];
    }
}

console.log(medianOfArray([1, 2, 3, 4, 5])); 
console.log(medianOfArray([-3, 8, -2, 10])); 
// 13.          find the mode median of an array of numbers
function modeOfArray(arr) {
    let frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            modes = [num];
        } else if (frequencyMap[num] === maxFrequency) {
            modes.push(num);
        }
    });

    return modes;
}

console.log(modeOfArray([1, 2, 2, 3, 3, 4]));
console.log(modeOfArray([4, 4, 5, 5, 6]));
// 14.              reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));
console.log(reverseString('JavaScript'));
// 15.          
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanStr === reversedStr;
}

// Test the function
console.log(isPalindrome('A man, a plan, a canal, Panama.')); // Output: true
console.log(isPalindrome('Hello World'));
// 16.
function toUpperCase(str) {
    return str.toUpperCase();
}

// Test the function
console.log(toUpperCase('hello world'));
// 17.
function toLowerCase(str) {
    return str.toLowerCase();
}

// Test the function
console.log(toLowerCase('Hello World'));
// 18
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Test the function
console.log(capitalizeWords('hello world'));
// 19.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Test the function
console.log(countVowels('Hello World'));
// 20.
function countConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
            consonantCount++;
        }
    }

    return consonantCount;
}

// Test the function
console.log(countConsonants('Hello World'));
// 21.
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Test the function
console.log(removeVowels('Hello World'));
// 22.
function removeConsonants(str) {
    return str.replace(/[^aeiouAEIOU]/g, '');
}

// Test the function
console.log(removeConsonants('Hello World'));
// 23.
function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

// Test the function
console.log(containsOnlyNumbers('12345')); // true
console.log(containsOnlyNumbers('abc123')); // false
// 24.
function containsOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Test the function
console.log(containsOnlyLetters('abcdef')); // true
console.log(containsOnlyLetters('123abc')); // false

// 25.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
console.log(getRandomInt(1, 10)); // Generates a random integer between 1 and 10
// 26.
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

// Example usage
console.log(generateRandomString(8)); // Generates a random string of length 8
// 27.
function findFactorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
}

// Example usage
console.log(findFactorial(5)); // Returns the factorial of 5
// 28.
function isPowerOfTwo(num) {
    return (num & (num - 1)) === 0 && num !== 0;
}

// Example usage
console.log(isPowerOfTwo(16)); // Returns true
console.log(isPowerOfTwo(15)); // Returns false
// 29.
function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}

// Example usage
console.log(isPerfectSquare(25)); // Returns true
console.log(isPerfectSquare(30)); // Returns false
// 30.
function generateFibonacciSequence(numTerms) {
    let sequence = [];
  
    for (let i = 0; i < numTerms; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
  
    return sequence;
}

// Example usage
console.log(generateFibonacciSequence(10)); // Returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].
// 31.
function findGCD(a, b) {
    // Ensure both numbers are positive
    a = Math.abs(a);
    b = Math.abs(b);

    // Euclidean algorithm to find GCD
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

// Example usage
console.log(findGCD(24, 36)); // Returns 12
// 32.
function decimalToBinary(decimal) {
    // Using the built-in toString method with base 2
    return decimal.toString(2);
}

// Example usage
console.log(decimalToBinary(10)); // Returns "1010"
// 33.
function binaryToDecimal(binary) {
    // Using the built-in parseInt method with base 2
    return parseInt(binary, 2);
}

// Example usage
console.log(binaryToDecimal("1010")); // Returns 10
// 34.
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage
console.log(sortAscending([5, 2, 8, 1, 6])); // Returns [1, 2, 5, 6, 8]
// 35.
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Example usage
console.log(sortDescending([5, 2, 8, 1, 6])); // Returns [8, 6, 5, 2, 1]

// 36.
// 37.
// 38.
// 39.
// 40.