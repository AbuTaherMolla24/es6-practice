const person = { name: 'shuvo', age: '27', job: 'mollagroup', gfName: 'tuntuni', phone: '01727'};

const {phone, gfName} = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName);
// console.log(gfName);
// console.log(gfName);

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'leader'
    }
}
const {leader} = complexObject.info;

const friends = ['moola', 'ibrahim', 'anik', 'jisan'];
const [chotoFriend, ...olderFriend] = friends;
console.log( olderFriend);