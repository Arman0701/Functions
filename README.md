# **Tasks**

## Required Tasks

***

### 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

| Input | Output |
|---|---|
| [ 45, 12, 3, 6, 17, 0 ] | [ 45, 3, 17 ], [ 12, 6, 0 ] |
| [ 1, 3, 5, 9 ] | [ 1, 3, 5, 9 ], [ ] |

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/1.Separate-given-arr.js)

***

### 2. Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol. Write appropriate function for each operation.

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/2.Calculating-functions.js)

***

### 3. Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

* If the phone number is less than 10 digits assume that it is a bad number
* If the phone number is longer than 10, then it is a bad number
* If the phone number is 10 digits assume that it is good
* If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim + and return remaining 10 digits.
* If the phone number contains + symbol more than one, consider it as a bad number.
* If the phone number contains + symbol not as the first character, consider it as a bad number.

### Ignore spaces between digits.

| Input | Output |
|---|---|
| " 455678 " | " Bad number " |
| " 339 5656888 " | " 3395656888 " |
| " +0008989562 " | " 0008989562 " |
| " 45231489562 " | " Bad number " |
| " 123+2356897452 " | " Bad number " |

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/3.Phone-validation.js)

***

### 4. Given a word and a list of possible anagrams, select the correct sublist.
| Input | Output |
|---|---|
| "listen", ["enlists", "google", "inlets", "banana"] | ["inlets"] |
| "pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"] | ["licnep", nilcpe] |

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/4.Check-correct-sublist.js)

***

### 5. Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

| Input | Output |
|---|---|
| " FwrtY45KHL120mn10P " | 175 | 
| " Wert12lop-12 " | 0 | 

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/5.String-parse.js)

***

### 6. Write a function which receives two strings and removes appearances of the second string from the first one.

| Input | Output |
|---|---|
| "This is some text.", "is" | "Th some text." | 
| "Yes, London. You know: fish, chips, cup "o tea, bad food, worse weather", "o"| "Yes, Lndn. Yu knw: fish, chips, cup " tea, bad fd, wrse weather" |

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/6.Remove-substring.js)

***

### 7. Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "cba". Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

| Input|  Output| 
|---|---|
| "dfgjkloyp"|  "fgdkljypo"| 
| "aweyoolp"|  "weaooylp"| 

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/7.Reverse-3-chars.js)

***

### 8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string. If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).
| Input | Output |
|---|---|
| "A revolution without dancing is a revolution not worth having." | "revolution" | 
| "Which would be worse - to live as a monster, or to die as a good man?" | "monster" | 

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/8.Longest-word.js)

***

### 9. Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.
| Input|  Output |
|---|---|
| [10, 25, 16, -5, 30, 15, 24] , 16 | [25, 30, 24] | 
| [1, 1, 2, -3, 0, 8, 4, 0], 9 | "Such values do not exist." | 

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/9.Bigger-than.js)

***

### 10. Write a function to find longest substring in a given a string without repeating characters except space character. If there are several, return the last one. Consider that all letters are lowercase.
| Input |  Output | 
|---|---|
| "there are no two words in the english language more harmful than "good job"." | "rmful than "go"| 
| "parting your soup is not a miracle, bruce." | "up is not a m" |

[Solution]()

***

### 11. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

| Input |  Output | 
|---|---|
| 19, 42 | "20, 22, 24, 26, 28, 40, 42" | 
| 99, 199 |  "Such numbers does not exist." | 

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/11%E2%80%A4Numbers-with-even-digits.js)

***

### 12. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.

| Input|  Output | 
|---|---|
| 5 | "five" | 
| 25 |  "twenty five" | 
| 425 |  "four hundred twenty five" | 
| 9425 | "nine thousand four hundred twenty five" | 
| 79425 |  "seventy nine thousand four hundred twenty five" | 
| 179425 |  "one hundred seventy nine thousand four hundred twenty five" | 

[Solution]()

***

### 13. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.
| Input |  Output | 
|---|---|
[4] |  [4] | 
| [19, 6] | [19, 6] | 
| [5, 9,23, 0,-2, -1]| [[5, 9, 23], [5, 9, 0], [5, 9, -2], [5, 9, -1], [5, 23, 0], [5, 3, -2], [5, 23, -1], [5, 0, -2], [5, 0, -1],[5,-2, -1], [9, 23, 0], [9, 23, -2], [9, 23, -1], [9, 0, -2], [9, 0, -1], [9, -2, -1], [23, 0, -2], [23, 0, -1], [23, -2, -1], [0, -2,-1]] |

[Solution]()

***

### 14. Write a function, which receives an array as an argument which elements arrays of numbers. Find product of biggest negative number of each array. If there is not any negative number, ignore that array. Check that items of the given array are arrays.

| Input |  Output | 
|---|---|
| [[2, -9, -3, 0],  [1, 2], [-4 , -11, 0]] | 12 | 
| [[3, 4], [11, 0], [5, 6, 7, 8]] | "No negatives" | 
| [1, 2, 3] | "Invalid Argument" |

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/14.Biggest-neg-prod.js)

***

### 15. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

| Input|  Output | 
|---|---|
| { a: ‘1ʼ, b: ‘2ʼ }|  { 1: ‘aʼ, 2: ‘bʼ } | 
| { a: ‘1ʼ, b: ‘2ʼ, c: ‘2ʼ } |  { 1: ‘aʼ, 2: [‘bʼ, ‘cʼ] } | 
| { a: ‘1ʼ, b: ‘2ʼ, c: ‘2ʼ, d: ‘2ʼ }|  { 1: ‘aʼ, 2: [‘bʼ, ‘cʼ, ‘dʼ] } | 

[Solution]()

***

### 16. Given the list of the following readers:

```
[
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];
```

### Output the books sorted by the percent in descending order which readStatus is true.

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/16.Objects-sorted-by.js)

***


### 17. Given two objects. Write a function that performs shallow compare.

|Input | Output |
| --- | --- |
| let a = { a: ‘1ʼ }; let b = { a: ‘1ʼ}; shallowCompare(a, b) | true |
| let a = { a: ‘1ʼ }; let b = { a: ‘1ʼ, b: ‘2ʼ }; shallowCompare(a, b) | false |
| let a = { }; let b = { }; shallowCompare(a, b); | true |

[Solution](https://github.com/Arman0701/Functions/blob/master/Required_Tasks/17.Shallow-compare.js)

***


# **Literature**
#### Available in Russian

* [Functions](https://javascript.info/function-basics)
* [Function Expressions](https://javascript.info/function-expressions)
* [Arrow Functions](https://javascript.info/arrow-functions-basics)