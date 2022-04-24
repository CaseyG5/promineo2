
//let success;
//success = window.prompt("Did it work?", "yes/no");

// let faveFoods = [ "avocado", "bok choy", "broccoli", "cabbage", "carrots", "celery", "cheese", "yogurt" ];

// const letters = ['o', 'a', 's', 'i', 's'];

// let myName = letters.reduce( (prev, curr) => prev + curr );
// console.log( "combined characters are: " + myName );


/* start assignment here */
// Part 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log( ages );

ages[ (ages.length - 1) ] -= ages[ (ages.length - ages.length) ];
console.log( ages );

ages.splice( (ages.length - 1), 0, 45);
console.log( ages );

ages[ (ages.length - 1) ] -= ages[ (ages.length - ages.length) ];
console.log( ages );

let total = 0;
for( let i=0; i < ages.length; i++ ) {
    total += ages[i];
}
const avgAge = total / ages.length;
console.log( "The average age is: ", avgAge);

// Part 2
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;
for( let j=0; j < names.length; j++ ) {
    totalChars += names[j].length;
}
const avgChars = totalChars / names.length;
console.log("The average # of letters per name is: ", avgChars);

let stringOfNames = "";
for( let k=0; k < names.length; k++ ) {
    stringOfNames = stringOfNames + names[k] + " ";
}
console.log("Concatenation of names: ", stringOfNames);

// Q3: How do you access the last element of any array?
// A: Using length - 1.

// Q4: How do you access the first element of any array?
// A: Using index 0.

// Part 5

let nameLengths = [];

for( let i=0; i < names.length; i++ ) {
    nameLengths.push( names[i].length );
}

// Part 6

let nameLengthSum = 0;
for ( let j=0; j < nameLengths.length; j++ ) {
    nameLengthSum += nameLengths[j];
}
console.log("Sum of all name lengths: ", nameLengthSum);

// Part 7

const RepeatWord = ( word, n ) => {
    //if (typeof word != String) return "invalid argument";

    let phrase = "";
    for( i=0; i< n; i++ ) {
        phrase += word;
    }
    return phrase;
}

console.log( RepeatWord("Hello", 3) );

// Part 8

const FullName = ( firstName, lastName ) => {
    return (firstName + " " + lastName);
}

// Part 9

const SumGT100 = ( numArray ) => {
    let total = 0;
    for( let i=0; i < numArray.length; i++ ) {
        total += numArray[i];
    }
    if( total > 100 ) return true;
    //return false;
}

// Part 10

const GetAverage = ( numArray ) => {
    let total = 0;
    for( let i=0; i < numArray.length; i++ ) {
        total += numArray[i];
    }
    return total / numArray.length;
}

// Part 11

const CompareAverages = ( numArray1, numArray2 ) => {
    let total = 0;
    for( let i=0; i < numArray1.length; i++ ) {
        total += numArray1[i];
    }
    const avg1 = total / numArray1.length;

    total = 0;
    for( let j=0; j < numArray2.length; j++ ) {
        total += numArray2[j];
    }
    const avg2 = total / numArray2.length;

    if( avg1 > avg2 ) return true;
    // return false;
}

// Part 12

function willBuyDrink( isHotOutside, moneyInPocket ) {
    if ( isHotOutside && moneyInPocket > 10.5 ) return true;
}

// Part 13
// This function picks an activity given the weather today.
// I wrote it to help me decide.

function WhatToDoToday( weatherCondition ) {
    switch( weatherCondition ) {
        case "raining":
            return "Stay home and practice JavaScript.";

        case "overcast":
            return "Play basketball.";

        case "partly sunny":
            return "Go hiking.";

        case "sunny and clear":
            return "Go to the beach.";

        case "rainbows":
            return "Look for a pot o' gold.";
    }
}

