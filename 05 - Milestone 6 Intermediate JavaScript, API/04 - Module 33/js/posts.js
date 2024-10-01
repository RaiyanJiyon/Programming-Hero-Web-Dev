function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>  res.json())
    .then(posts => displayData(posts))
}

function displayData(posts) {
    const postContainer = document.getElementById('post-container');

    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4>${post.id}</h4>
        <h5>${post.userId}</h5>
        <p>${post.title}</p>
        <p>${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }

}

postData();