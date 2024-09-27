class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`${this.name} is a ${this.age} years old.`);
    }

    displayInfo() {
        this.display();
    }
}

const person1 = new Person('John', 23);
person1.display();
const displayInfo = person1.displayInfo();
console.log(displayInfo) //undefined