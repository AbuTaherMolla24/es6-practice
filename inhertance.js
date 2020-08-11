class Parent{
    constructor(){
        this.fatherName =  'bashar';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + "  " + this.fatherName;
    }
}
const baby = new Child('molla');
const baby2 = new Child('ak');
console.log(baby.getFullName());
console.log(baby2.getFullName());