/* Task-02 */
function multiplyOrDivide(number) {
    if (number % 2 === 1) {
        const multiply = number * 2;
        return multiply;
    }
    else {
        const divide = number / 2;
        return divide;
    }
}

const odd = 11;
const even = 14;

const result = multiplyOrDivide(odd);
const result2 = multiplyOrDivide(even);

console.log(result);
console.log(result2);