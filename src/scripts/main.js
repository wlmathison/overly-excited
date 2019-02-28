// Practice - Stacking Words
// Create an array that contains the words in the sentence
// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += theWordArray[i] + " ";
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }
// }
// // Invoke the function and pass in the array
// addExcitement(sentence)





// Practice: Some words are more exciting than others

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// function addExcitement(theWordArray, punctuation) {
//     let buildMeUp = ""

//     for (let i = 1; i <= theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */
//         if (i % 3 === 0) {
//             buildMeUp += theWordArray[i - 1] + punctuation;
//         } else {
//             buildMeUp += theWordArray[i - 1] + " ";
//         }

//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     } 
// }
// addExcitement(sentence)





// Practice: Function Arguments
// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
//  function addExcitement(theWordArray, punctuation) {
//     let buildMeUp = ""

//     for (let i = 1; i <= theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */
//         if (i % 3 === 0) {
//             buildMeUp += theWordArray[i - 1] + punctuation;
//         } else {
//             buildMeUp += theWordArray[i - 1] + " ";
//         }
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }
// }
// // I want to use a question mark
// addExcitement(sentence, "?")





// Challenge: Multiple Punctuation

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// function addExcitement(theWordArray, punctuation, num) {
//     let buildMeUp = ""
 
//     for (let i = 1; i <= theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */
//         if (i % 3 === 0) {
//             buildMeUp += theWordArray[i - 1] + punctuation.repeat(num);
//         } else {
//             buildMeUp += theWordArray[i - 1] + " ";
//         }
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }
// }
// // I want to use a 4 asterisks
// addExcitement(sentence, "*", 4)





// Challenge: Arrow Functions

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let addExcitement = (theWordArray, punctuation, num) => {
    let buildMeUp = ""
     for (let i = 1; i <= theWordArray.length; i++) {
        if (i % 3 === 0) {
            buildMeUp += theWordArray[i - 1] + punctuation.repeat(num);
        } else {
            buildMeUp += theWordArray[i - 1] + " ";
        }
        console.log(buildMeUp)
    }
}
addExcitement(sentence, "*", 4)