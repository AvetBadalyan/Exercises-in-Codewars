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
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
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