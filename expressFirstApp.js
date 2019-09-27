const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('This is home dir'));
app.get('/news', (req, res) => res.send('This is news dir'));
app.get('/news/:id/', (req, res) => res.send(`id is ${req.params.id}`));
app.get('/news/:id/:subID', (req, res) => res.send(`id is ${req.params.id}, subID is ${req.params.subID}`));

app.listen(3000);
