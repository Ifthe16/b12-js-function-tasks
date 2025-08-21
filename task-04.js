/* Task-04 */
function count_zero(str) {
    let count = 0;
    for (const character of str) {
        if (character === '0') {
            count++;
        }
    }
    return count;
}

const binaryStr = '110100101001011010010100101101001010010110100101001000101110110000100100';


const countZero = count_zero(binaryStr);
console.log(`Number of 0's: ${countZero}`);