function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data));
}

function displayUser(data) {
    const listItem = document.getElementById('list-item');
    for (const user of data) {
        const item = document.createElement('li');
        item.textContent = user.name
        listItem.appendChild(item);
    }
}