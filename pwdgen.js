/*
    Copyright 2021 Cédric Jäger

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

// some constants
const WEAK = 'weak';
const STRONG = 'strong';

// get an array of characters matching a complexity ('weak' or 'strong')
function getCharacterset(complexity) {

    // parameter checks in developement
    if (typeof TEST !== 'undefined' && TEST) {
        console.assert(WEAK.localeCompare(complexity) == 0 || STRONG.localeCompare(complexity) == 0, 'Invalid parameter : complexity value must be \'weak\' or \'strong\'!');
    }

    // define some arrays of printable characters for use in the generated passwords
    const alphaUpperCase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const alphaLowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
    const numbers = Array.from('1234567890');
    const symbols = Array.from('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');

    let complexityArray = new Array();
    switch (complexity) {
        case STRONG:
            complexityArray = symbols;
        case WEAK:
            complexityArray = numbers.concat(alphaUpperCase.concat(alphaLowerCase.concat(complexityArray)));
    }
    return complexityArray;

}

// generate an array of random numbers with a size comprised between min and max
function getArrayOfRandomNumbers(min, max) {

    // parameter checks in developement
    if (typeof TEST !== 'undefined' && TEST) {
        console.assert(!isNaN(min), 'Invalid parameter : min is not a number!');
        console.assert(!isNaN(max), 'Invalid parameter : max is not a number!');
        console.assert(isNaN(min) || isNaN(max) || min < max, 'Invalid parameters : min is bigger than max!');
    }

    // initialize an array of random 32 bits unsigned integers with a random size between min and max parameters
    let size = (Math.random() * (max - min + 1)) + min;
    let array = new Uint32Array(size);
    window.crypto.getRandomValues(array);
    return array;

}

// generate a password based on a charset array and an array of random numbers
function getPassword(charsetArray, numbersArray) {

    // parameter checks in developement
    if (typeof TEST !== 'undefined' && TEST) {
        console.assert(!charsetArray.isArray && charsetArray.length > 0, 'Invalid parameter : charsetArray is NOT an array or is empty!');
        for (const element of charsetArray) {
            console.assert(typeof element === 'string' && element.length == 1, 'Invalid parameter : charsetArray contains an invalid element!');
        }
        console.assert(!numbersArray.isArray&& numbersArray.length > 0, 'Invalid parameter : numbersArray is NOT an Array or is empty!');
        for (const element of numbersArray) {
            console.assert(Number.isInteger(element) && element >= 0, 'Invalid parameter : numbersArray contains an invalid element!');
        }
    }

    // compute a password using the two arrays passed as parameters
    let password = '';
    for(const number of numbersArray) {
        const index = number % charsetArray.length;
        password += charsetArray[index];
    }
    return password;
}

// get a weak password
function getWeakPassword() {

    // define a waek password
    const min = 8;
    const max = 16;
    const complexity = WEAK;

    // compute a password
    return getPassword(getCharacterset(complexity), getArrayOfRandomNumbers(min, max));

}

// get a strong password
function getStrongPassword() {

    // define a strong password
    const min = 32;
    const max = 48;
    const complexity = STRONG;

    // compute a password
    return getPassword(getCharacterset(complexity), getArrayOfRandomNumbers(min, max));

}

// set passwords to inputs
document.getElementById("pwdgenInputWeak").value = getWeakPassword();
document.getElementById("pwdgenInputStrong").value = getStrongPassword();

// add an Event Listener on the cross to close the extension
document.getElementById("pwdgenCloseImage").addEventListener('click', function() { window.close(); });

// add an Event Listener to the input fields to select the password
document.getElementById("pwdgenInputWeak").addEventListener('focus', function() { document.getElementById("pwdgenInputWeak").select(); });
document.getElementById("pwdgenInputStrong").addEventListener('focus', function() { document.getElementById("pwdgenInputStrong").select(); });
