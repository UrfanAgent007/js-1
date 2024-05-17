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