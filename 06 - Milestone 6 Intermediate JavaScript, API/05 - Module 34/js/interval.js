// Logs numbers 1 and 2 immediately
console.log(1);
console.log(2);

// Schedules a function to log the number 3 after 4 seconds
setTimeout(() => {
    console.log(3);
}, 4000);

// Logs numbers 4 and 5 immediately
console.log(4);
console.log(5);

// Initializes a counter variable
let num = 0;

// Sets an interval to execute every 2 seconds
const myInterval = setInterval(() => {
    num++;

    if (num > 5) {
        // Clears the interval when the counter exceeds 5
        clearInterval(myInterval);
    } else {
        // Logs the current counter value
        console.log(num);
    }
}, 2000);