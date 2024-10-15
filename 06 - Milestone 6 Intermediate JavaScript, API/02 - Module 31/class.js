class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    displayInformation() {
        console.log(`Teacher name is: ${this.name} and he is teaching ${this.subject} subject`);
    }
}

const teacher1 = new Teacher('Anisul', 'Web Programming');
teacher1.displayInformation();