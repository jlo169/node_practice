const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getList', (req, res) => {
    const list = ['pug', 'puggy', 'wuggy'];
    res.json(list);
    console.log('Sent list of items');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening to port' + port);