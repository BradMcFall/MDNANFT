const express = require('express');
const path = require('path');
const avalanche = require("avalanche");
const app = express(), bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/build')));
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../app/build/index.html'));
});
app.get('/api/test', (req, res) => {
    res.json({"avalanche":'data'});
});
app.listen(port, () => {
    console.log(`listening on the port ${port}`);
});
