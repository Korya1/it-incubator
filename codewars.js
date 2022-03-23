//=======================================

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

//=======================================

function filterLongWords(sentence, n) {

    let words = sentence.split(" ");
    let arr = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > n) {
            arr.push(words[i]);
        }
    }
    return arr;
}

const chai = require("chai");
const assert = chai.assert;

describe("Test Cases", function () {
    it("basic example", function () {
        assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);
    });
});


//=======================================

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer
// , and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with
// 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

//=======================================

function usdcny(usd) {
    const CNY = 6.75;
    let temp = usd * CNY;

    let result = temp.toFixed(2) + ' Chinese Yuan';

    return result;
}

const chai = require("chai");
const as = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        as.strictEqual(usdcny(15), '101.25 Chinese Yuan');
        as.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
    });
});

//=======================================

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//=======================================

function doubleChar(str) {

    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += str[i] += str[i];
    }
    return newStr;
}

describe("doubleChar", function () {
    it("works for some examples", function () {
        Test.assertEquals(doubleChar("abcd"), "aabbccdd");
        Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
        Test.assertEquals(doubleChar("1337"), "11333377");
        Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
        Test.assertEquals(doubleChar("123456"), "112233445566");
        Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
    });
});

//=======================================

/*Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number
only.*/

//=======================================

function getAge(inputString) {
    return parseInt(inputString);
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(getAge("4 years old"), 4);
    })
})

//=======================================

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

//=======================================

function maps(x) {
    let result = [];
    for (let i = 0; i < x.length; ++i) {
        result.push(x[i] * 2);
    }
    return result;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Fixed tests", () => {
        assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
        assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
        assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
    });
});

//=======================================

/*Given a string, swap the case for each of the letters.

    e.g. CodEwArs --> cODeWaRS

Examples
""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"*/

//=======================================

function swap(str){

    return str.split('').map(item => item === item.toUpperCase()
        ? item.toLowerCase()
        : item.toUpperCase()).join('');
}

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(swap('HelloWorld'), 'hELLOwORLD');
        Test.assertEquals(swap('CodeWars'), 'cODEwARS');
    });
});

//=======================================

