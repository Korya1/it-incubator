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

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

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