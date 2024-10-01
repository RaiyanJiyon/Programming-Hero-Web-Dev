// normal way
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => console.log(comments))
    .catch(error => console.log("Error occurs - ",error))


// async way

const displayComments = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await res.json();
        console.log(comments)
    } catch (error) {
        console.log("Error occurs - ",error)
    }
}

displayComments();