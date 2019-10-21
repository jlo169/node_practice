const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Puggy');
})

app.route('/wuggy').get((req, res) => {
    res.send('Puggy wuggy');
})

const server = app.listen(3030, () => {})