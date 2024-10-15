const delayedGreeting = (name, delay) => {
    setTimeout(() => {
        console.log(name);
    }, delay);
}

delayedGreeting('Alice', 2000);