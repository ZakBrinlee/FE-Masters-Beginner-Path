/* 

 In Class examples

 */

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log('my name is ', name);
        }
    };
};

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
const suspectsList = [];

// My first way of doing it
//const suspectsList = suspects.map(suspect => CreateSuspectObjects(suspect));

// Using forEach
// suspects.forEach(suspect => {
//     suspectsList.push(CreateSuspectObjects(suspect));
// });

// Example using _.each
// Takes two arguments (list, callback/iterator function)
_.each(suspects, name => {
    suspectsList.push(CreateSuspectObjects(name));
});

console.log(suspectsList);

/*
    Excercise

    1. Complete the rest of this function so that it works as described in prv slides
        * _.each = function(list, callback) { // TODO }


*/

const _ = {};

_.each = function (list, callback) {
    // Ensure it works with arrays and objects
    if (Array.isArray(list)) {
        for (const [index, item] of list.entries()) {
            callback(item, index, list);
        }
    } else {
        for (const key in list) {
            // Course example
            callback(list[key], key, list)

            // My first attempt
            // callback(key, Object.keys(list).indexOf(key), list);
        }
    }
};

// Test for array list
_.each(['one', 'two', 'three'], function(name, i, list) {
    if (list[i + 1]){
        console.log(name, ' is younger than ', list[i + 1]);
    } else {
        console.log(name, ' is the oldest');
    }
});

// Test for object list
_.each({'one': 'one', 'two': 'two', 'three': 'three'}, function(name, i, list) {
    if (list[i + 1]){
        console.log(name, ' is younger than ', list[i + 1]);
    } else {
        console.log(name, ' is the oldest');
    }
});
