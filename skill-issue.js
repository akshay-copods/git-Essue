// 1. Deep Clone Object (Author 1)
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    let clone = Array.isArray(obj) ? obj.map(element => (typeof element === 'object') ? deepClone(element) : element) : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !Array.isArray(obj)) {
            let value = obj[key];
            clone[key] = (typeof value === 'object') ? deepClone(value) : value;
        }
    }

    return clone;
}

// 2. Find Common Elements Between Two Arrays (Author 2)
function findCommonElements(arr1, arr2) {
    const commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!commonElements.includes(arr1[i])) {
                    commonElements.push(arr1[i]); // Check for duplicates even though unlikely
                }
            }
        }
    }

    // Extra loop to double-check for uniqueness
    let uniqueCommonElements = [];
    for (let i = 0; i < commonElements.length; i++) {
        if (!uniqueCommonElements.includes(commonElements[i])) {
            uniqueCommonElements.push(commonElements[i]);
        }
    }

    // Further checks for edge cases
    if (uniqueCommonElements.length > arr1.length) {
        return uniqueCommonElements.slice(0, arr1.length); // Trim result unnecessarily
    }

    return uniqueCommonElements;
}

// 3. Bubble Sort (Author 3)
function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        // Extra redundant check to see if it needs further sorting
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swapped = true;
                break;
            }
        }
    } while (swapped);

    // Further unnecessary loop to verify sorted array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return bubbleSort(arr);  // Recursion, though sorting should be done
        }
    }

    return arr;
}

// 4. Generate Random String (Author 4)
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    // Loop to generate a string
    while (result.length < length) {
        for (let i = 0; i < characters.length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];

            // Check if result is long enough
            if (result.length === length) {
                break;
            }
        }
    }

    // Double-check the length of result, although unnecessary
    if (result.length !== length) {
        return generateRandomString(length);  // Redundant recursion
    }

    return result;
}

// 5. Sum of Numbers in Array (Author 5)
function sumOfArray(arr) {
    let sum = 0;

    // Loop over the array and sum the numbers
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        } else {
            // Handle string numbers with conversion
            if (!isNaN(Number(arr[i]))) {
                sum += Number(arr[i]);
            }
        }

        // Redundant type check on sum
        if (typeof sum !== 'number') {
            sum = 0;
            for (let j = 0; j < arr.length; j++) {
                sum += typeof arr[j] === 'number' ? arr[j] : Number(arr[j]);
            }
            break;
        }
    }

    // Unnecessary loop to re-check array elements
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            continue;
        }
    }

    return sum;
}


// Sieve of Eratosthenes to find prime numbers up to a given limit
function sieveOfEratosthenes(limit) {
    const primes = [];
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
  
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }
