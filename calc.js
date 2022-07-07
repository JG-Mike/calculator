// link html to javascript
const display = document.getElementById ('display');
const plusBtn = document.getElementById ('plusBtn');
const subtractBtn = document.getElementById ('subtractBtn');
const multipleBtn = document.getElementById ('multipleBtn');
const clearAll = document.getElementById('clearAll');
// const numBtn = document.getElementById('numBtn');

// button input function
function numfunction(button){
    var num = button.value;
    document.getElementById('calculatorButtons').innerHTML = num;

}

