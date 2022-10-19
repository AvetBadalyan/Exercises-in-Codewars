# Codewars exercises

## 1. alphabet Position

Given a string, replace every letter with its position in the alphabet.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

[01.alphabetIndex.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/01.alphabetIndex.js)

## 2. Senior or Open

Club has two categories of membership, Senior and Open.To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26;

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member.
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior)
stating whether the respective member is to be placed in the senior or open category.

Example
input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

[02.seniorOrOpen.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/02.seniorOrOpen.js)

## 3. Friends

Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
Note: keep the original order of the names in the output.

[03.friends.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/03.friends.js)

## 4. Find the index in the Array where Left === Right

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

[04.findIndex.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/04.findIndex.js)

## 5. Is the string Pangram ?

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

[05.alphabetAllLetters.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/05.alphabetAllLetters.js)

## 6. Persistent Bugger

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

[06.PersistentBugger.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/06.%20Persistent%20Bugger.js)

## 7. Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

[07.MovingZerosToTheEnd.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/07.MovingZerosToTheEnd.js)

## 8. Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

[08.ReverseLongWords.js](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/08.ReverseLongWords.js)

## 9. Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "("
if that character appears only once in the original string, or ")"
if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("

[Duplicate Encoder](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/09.DuplicateEncoder.js)

## 10. Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.

[Multiples of 3 or 5](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/10.%20MultiplesOf3Or5.js)

## 11. Vowels in String

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

[Vowels in String](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/11.VowerCount.js)

## 12. Pagination Helper

The constructor takes in an array of items and a integer indicating how many items fit within a single page

- returns the number of items within the entire collection
- returns the number of pages
- returns the number of items on the current page. page_index is zero based.
  this method should return -1 for pageIndex values that are out of range
- determines what page an item is on. Zero based indexes
  this method should return -1 for itemIndex values that are out of range

[Pagination Helper](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/12.pagination.js)

## 13. Disemvowel Trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.

[Disemvowel Trolls](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/13.RemoveVowels.js)

## 14. Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[] --> "no one likes this"
["Peter"] --> "Peter likes this"
["Jacob", "Alex"] --> "Jacob and Alex like this"
["Max", "John", "Mark"] --> "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

[Facebook Likes](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/14.FacebookLikes.js)

## 15. Create a Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

[Create a Phone Number](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/15.CreatePhoneNumber.js)

## 16. Make promises to print in console in the right order

setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 1000);

[Promises in the right order](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/16.Promises.js)

## 17. Bubble sort implementation

Sort the array without using sort() method

[Array sort implementation](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/17.bubleSort.js)

## 18. Snail from matrix

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

image - https://www.haan.lu/files/2513/8347/2456/snail.png

[Snail from array](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/18.snail.js)

## 19. Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6

[number digits recursion sum](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/19.recursionDigits.js)

## 20. Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]

[filter array from the number](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/20.arrayIncludes.js)

## 21. your order please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"

[your order please](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/21.%20yourOrderPlease.js)

## 22. Max and Min

you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

[Max and Min](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/22.MaxAndMin.js)

## 23. Descending order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321

[Descending order](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/23.DescendingORder.js)

## 24. Get the Middle

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"

[Get the Middle](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/24.getTheMiddle.js)

## 25. Find the Outlier

Find The Parity Outlier
You are given an array (which will have a length of at least 3, but could be very large) containing integersegers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

[Find the Outlier](https://github.com/AvetBadalyan/Exercises-in-Codewars/blob/main/25.findOutflier.js)
