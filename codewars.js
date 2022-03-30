//=======================================

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are
// longer than n.

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
        assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown'
            , 'jumps']);
    });
});


//=======================================

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an
// integer
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

function swap(str) {

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

/*Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

    Remember that you can include the builtin require() function to include external modules (you're not expected to
    implement MD5 hash algorithm yourself, there are many modules that can do that for you).

If you're not familiar with modules, see this kata.

NodeJS documentation here.

    Code Examples
passHash("password") // --> "5f4dcc3b5aa765d61d8327deb882cf99"
passHash("abc123") // --> "e99a18c428cb38d5f260853678922e03"*/

//=======================================

var crypto = require('crypto');

function passHash(str) {
    var md5 = crypto.createHash('md5');
    md5.update(str, 'utf8');
    return md5.digest('hex');
}

describe("Tests", () => {
    it("test", () => {
        var tests = [
            ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
            ['abc123', 'e99a18c428cb38d5f260853678922e03']
        ]

        for (var i = 0; i < tests.length; i++) {
            Test.assertEquals(passHash(tests[i][0]), tests[i][1])
        }
    });
});

//=======================================

/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

//=======================================

function spacify(str) {
    return str.split('').join(' ');
}

const {assert} = require("chai");

describe("spacify", function () {
    it("basic tests", function () {
        assert.equal(spacify('hello world'), 'h e l l o   w o r l d');
        assert.equal(spacify('12345'), '1 2 3 4 5');
    });
});

//=======================================

/*
You must implement a function that returns the difference between the largest and the smallest value in a given list /
array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

//=======================================

function maxDiff(list) {
    if (list.length) {
        let max = Math.max(...list);
        let min = Math.min(...list);
        return max - min;
    }
    return 0;
};

describe('Basic tests', function () {

    Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
    Test.assertEquals(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
    Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
    Test.assertEquals(maxDiff([16]), 0);
    Test.assertEquals(maxDiff([]), 0);

});

//=======================================

/*Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation.
There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be
separated by one space.
    Here are the following valid operators :
    + Addition
    - Subtraction
    * Multiplication
   // Integer Division

Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty
string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""*/

//=======================================

function dotCalculator(equation) {

    let separate = equation.split(" ");
    let count = 0;


    switch (separate[1]) {
        case '+':
            count = separate[0].length + separate[2].length;
            break;
        case '-':
            count = separate[0].length - separate[2].length;
            break;
        case '*':
            count = separate[0].length * separate[2].length;
            break;
        case '//':
            count = separate[0].length / separate[2].length;
            break;
    }

    return '.'.repeat(count);

    const strictEqual = require("chai").assert.strictEqual;

    function doTest(string, expected) {
        const actual = dotCalculator(string);
        strictEqual(actual, expected, `for string:\n"${string}"\n`);
    }

    describe("Tests suite", function () {
        it("sample tests", function () {
            doTest("..... + ...............", "....................");
            doTest("..... - ...", "..");
            doTest("..... - .", "....");
            doTest("..... * ...", "...............");
            doTest("..... * ..", "..........");
            doTest("..... // ..", "..");
            doTest("..... // .", ".....");
            doTest(". // ..", "");
            doTest(". - .", "");
        });
    });

//=======================================
    /*
    Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its
    value.

        Examples
    explode("312")
    should return :

    "333122"
    explode("102269")
    should return :

    "12222666666999999999"*/

//=======================================

    function explode(s) {
        return s.split('').map(n => n.repeat(parseInt(n))).join('');
    }

    const assert = require('chai').assert;
    describe("Example tests", () => {
        const tests = [
            ["312", "333122"],
            ["102269", "12222666666999999999"],
            ["0", ""],
            ["000", ""],
            ["123", "122333"]
        ];
        for (const [input, expected] of tests)
            it(JSON.stringify(input), () => assert.strictEqual(explode(input), expected));
    });

//=======================================
    /*
        You have a two-dimensional list in the following format:

            data = [[2, 5], [3, 4], [8, 7]]
        Each sub-list contains two items, and each item in the sub-lists is an integer.

            Write a function process_data()/processData() that processes each sub-list like so:

            [2, 5] --> 2 - 5 --> -3
                [3, 4] --> 3 - 4 --> -1
                [8, 7] --> 8 - 7 --> 1
        and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

        For input, you can trust that neither the main list nor the sublists will be empty.*/

//=======================================

    function processData(data) {
        return data.reduce((a, [b, c]) => a * (b - c), 1);
    }

    const chai = require("chai");
    const assert = chai.assert;

    describe("Fixed tests", function () {
        it("Basic tests", function () {
            assert.strictEqual(processData([[2, 5], [3, 4], [8, 7]]), 3, `For [[2, 5], [3, 4], [8, 7]]`);
            assert.strictEqual(processData([[2, 9], [2, 4], [7, 5]]), 28, `For [[2, 9], [2, 4], [7, 5]]`);
        });
    });

//=======================================
    // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    //
    //     Example
    // filter_list([1,2,'a','b']) == [1,2]
    // filter_list([1,'a','b',0,15]) == [1,0,15]
    // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//=======================================

    function filter_list(l) {
        return l.filter(n => (typeof n == "string") ? false : true);
    };

    const assert = require('chai').assert;
    describe("Tests", () => {
        it("test", () => {
            assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
            assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
            assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
        });
    });