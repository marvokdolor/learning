// Sum all numbers in a range
function sumAll(arr) {
  let count = 0
  let initial = Math.min(arr[0], arr[1])
  let final = Math.max(arr[0], arr[1])
  for (let i = initial; i <= final; i++){
    count += i
  }
  return count;
}

/* Compare two arrays and return a new array with any items only found in one of
   the two given arrays, but not both. In other words, return the symmetric
   difference of the two arrays.  */
function diffArray(arr1, arr2) {
  var newArr = [];
  function compareArrays(first, second){
	for (let j = 0; j < first.length; j++) {
	  if (second.indexOf(first[j]) < 0) {
		newArr.push(first[j])
	  }
	}
  }
  compareArrays(arr1, arr2)
  compareArrays(arr2, arr1)
  return newArr;
}


/* You will be provided with an initial array (the first argument in the
destroyer function), followed by one or more arguments. Remove all elements
from the initial array that are of the same value as these arguments. */
function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments, 1)
  let ogArr = [...arguments[0]]
  /* References
https://www.freecodecamp.org/forum/t/javascript-arguments/14283
https://flaviocopes.com/how-to-remove-item-from-array/
  */
  let newArr = ogArr.filter( (element => !args.includes(element)) )
  return newArr;
}

/*Make a function that looks through an array of objects (first argument) and
  returns an array of all objects that have matching name and value pairs
  (second argument). Each name and value pair of the source object has to be
  present in the object from the collection if it is to be included in the
  returned array.*/
function whatIsInAName(collection, source){
  // pull out the names in source
  let srcKeys = Object.keys(source)
  // filter the collection
  return collection.filter(function(entry){
      // based on every name:value pair in source
      for (let i = 0; i < srcKeys.length; i++){
          // if any entry in collection does not have the name:value pairs in source
          if(!entry.hasOwnProperty(srcKeys[i]) || entry[srcKeys[i]] !== source[srcKeys[i]]) {
              /* don't include them in the filtered array; NOTE: that we focus
                 on what to exclude here because all of the name:value pairs
                 in each entry do not have to match i.e. every name:value pair
                 in source must be in each entry, but every name:value pair in
                 entry does not have to be in source */
              return false;
          }
      }
      return true
  })
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first:
"Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
{ last: "Capulet" }));
// [{ first: "Tybalt", last: "Capulet" }]
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],
{ "apple": 1 }));
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}],
{"a": 1, "b": 9999, "c": 3}))
// []
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }],
{ "apple": 1, "bat": 2 }))
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]


 /*Convert a string to spinal case. Spinal case is
 all-lowercase-words-joined-by-dashes.*/
 function spinalCase(str) {
 // "It's such a fine line between stupid, and clever."
 // --David St. Hubbins
 //return str.split(/\s/).join('-').toLowerCase();

 //split each phrase up into separate words
   //words are sometimes delineated by capital letters, hyphens, underscores, spaces
   //I know I've come to the end of a word because the next character is NOT a lowercase
   // can't seem the figure out the RegEx for split so I'll try a long way instead

 // Create an empty array to hold the RegEx pieces I hope to build


 //rejoin using dashes
 //make entire phrase lowercase

}

/*
Translate the provided string to pig latin. Pig Latin takes the first
consonant (or consonant cluster) of an English word, moves it to the end of
the word and suffixes an "ay". If a word begins with a vowel you just add
"way" to the end. Input strings are guaranteed to be English words in all
lowercase.
Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
*/

function translatePigLatin(str) {
  let consonants = str.match(/^[^aeiou]+/)
  if (/[aeiou]/.test(str[0])){
    return str + 'way'
  } else {
    return str.substring(consonants[0].length) + consonants  + 'ay'
  }
}

/*Perform a search and replace on the sentence using the arguments provided and
return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note Preserve the case of the first character in the original word when you are
replacing it. For example if you mean to replace the word "Book" with the word
"dog", it should be replaced as "Dog" */

function myReplace(str, before, after) {
  let uppered = after[0].toUpperCase() + after.substring(1)
  let newStr = ''
  if (/[A-Z]/.test(before[0])){
    newStr = str.replace(before, uppered)
    } else {
        newStr = str.replace(before, after);
    }
    return newestStr

    // One line solution
    // return (/[A-Z]/.test(before[0]) ? str.replace(before, after[0].toUpperCase() + after.substring(1)) : str.replace(before, after))
}

/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
  let arr = []

  for (let i = 0; i < str.length; i++){
    if (str[i] == "G"){
      arr.push(["G", "C"])
    }
    else if (str[i] == "C"){
      arr.push(["C", "G"])
    }
    else if (str[i] == "A"){
      arr.push(["A", "T"])
    }
    else if (str[i] == "T"){
      arr.push(["T", "A"])
    }
  }
  return arr
}

/* Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

References:
String global object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
JS String Prototype CharCodeAt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
String.fromCharCode: https://www.w3schools.com/jsref/jsref_fromcharcode.asp
*/

function fearNotLetter(str) {
    let missingLetter
    for (let i = 0; i < str.length-1; i++){
        if ((str.charCodeAt(i+1)) - str.charCodeAt(i) === 2) {
            missingLetter = String.fromCharCode(str.charCodeAt(i)+1)
        }
    }
      return missingLetter;
}

fearNotLetter("abce"); // "d"
fearNotLetter("abcdefghjklmno"); // "i"
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); //undefined.

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
function uniteUnique(arr) {
    let newArr = []
    let args = Array.prototype.slice.call(arguments)
    for (let i = 0; i < args.length; i++){
        for (let j = 0; j < args[i].length; j++){
            if (!newArr.includes(args[i][j])){
                newArr.push(args[i][j])
            }
        }
    }
    return newArr;
}
