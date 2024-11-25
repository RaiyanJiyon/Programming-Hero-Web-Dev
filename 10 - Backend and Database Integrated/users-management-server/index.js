const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Raiyan', email: 'raiyan@gmail.com' },
    { id: 2, name: 'John', email: 'john@gmail.com' },
    { id: 3, name: 'Roman', email: 'roman@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log("Post request hitting");
    console.log(req.body);
    const newUsers = req.body;
    newUsers.id = users.length + 1;
    users.push(newUsers);
    res.send(newUsers);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});