/* Task-03 */
function make_avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const avg = sum / numbers.length;
    return avg;
}

const arr = [2, 4, 6, 8, 10];
const averageNumber = make_avg(arr);
console.log('The average of those values is:', averageNumber);