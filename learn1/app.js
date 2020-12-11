"use strict";
// unknow type
var userInput;
var userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
//Never type
function generateError(message, code) {
    throw { message: message, code: code };
    // note throw always end our script remedy is to use try and catch
    // while(true) {} --> never return a value
}
generateError("An error occured!", 500);
