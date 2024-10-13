const fetchAPI = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((result) => {
        result.json()
    .then((json) => {
        console.log(json);
    })
    }).catch((err) => {
        console.log("Error", err);
    });
}

// Using async/await
async function asyncAPI() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}

// Using an arrow function with async/await
const arrowAsyncAPI = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}

// Using try/catch for error handling with an arrow function
const arrowAsyncTryAPI = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}