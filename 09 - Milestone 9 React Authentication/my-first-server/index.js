const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World Hello Bangladesh, Hello Japan');
})

app.get('/books', (req, res) => {
    res.send("All books are here");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})