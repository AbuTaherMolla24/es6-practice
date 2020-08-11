const ages = [333, 44,666,666,];
const ages2 = [444,555,666,];
const ages3 = [44, 44, 55,55,555];
const allAges = ages.concat(ages2).concat(ages3);

const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

const m = 444;
const n = 444;
const taka = [333, 333,5555,555];
// const maximum = Math.max(m,n);
const maximum = Math.max(...taka);
console.log(maximum);
