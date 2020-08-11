// function doubleIt(num) {
//     return num*2;
// }

// const doubleIt = function myFun(num) {
//     return num*2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x+y;
const give5 = () => 5;
const bishalDoMath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const result4 = bishalDoMath(4,4);
const result2 = add(4,4);
const result3 = give5();
const result = doubleIt(50);
console.log(result);
console.log(result);