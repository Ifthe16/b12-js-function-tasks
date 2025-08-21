/* Task-05 */
function odd_even(number) {
    if (number % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

const num1 = 40;
const num2 = 43;

const checkNumber = odd_even(num1);
const checkNumber2 = odd_even(num2);

console.log(checkNumber);
console.log(checkNumber2);