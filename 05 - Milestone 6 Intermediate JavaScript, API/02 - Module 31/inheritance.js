class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} sounds ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name, sound, color, age) {
        super(name, sound);
    }
}

const dog1 = new Dog('Tom', 'Bark Bark...', 'red', 5);
dog1.makeSound();
