// Importing the 'constant' function from the 'async' library
const { constant } = require("async");

// Function that returns a promise
const myLoader = () => {
    return new Promise((resolve, reject) => {
        // Generate a random number between 0 and 1
        const success = Math.random();

        // Resolve the promise if the number is less than 0.5
        if (success < 0.5) {
            resolve(success);
        } else {
            // Reject the promise if the number is 0.5 or greater
            reject(success);
        }
    });
};

// Call the myLoader function and handle the promise
myLoader()
    .then((result) => {
        // Log success message with the result
        console.log("Success", result);
    })
    .catch((err) => {
        // Log error message with the error
        console.log("Error", err);
    });

// Normal way to fetch data from an API using fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())  // Convert the response to JSON
    .then(json => console.log(json));  // Log the JSON data

// Good way to fetch data from an API using async/await
const loadData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');  // Await the fetch call
    const data = await res.json();  // Await the JSON conversion
    console.log(data);  // Log the data
}

// Call the loadData function
loadData();