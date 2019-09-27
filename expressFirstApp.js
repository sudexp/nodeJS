const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.sendFile(__dirname + '/public/big.html'));

app.get('/news', (req, res) => res.send('This is news dir'));

app.get('/form', (req, res) => res.render('form'));

app.post('/form', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('formSuccess', { data: req.body });
});

// app.get('/news/:id/', (req, res) => res.send(`id is ${req.params.id}`));
app.get('/news/:id/', (req, res) => {
  const obj = { title: 'News in Helsinki', id: 12, paragraphs: [1, 2, 3, 4, 5] };
  console.log(req.query);
  res.render('news', { newsId: req.params.id, newParam: 12345, obj });
}); // http://127.0.0.1:3000/news/some_id

app.get('/news/:id/:subID', (req, res) => res.send(`id is ${req.params.id}, subID is ${req.params.subID}`));

app.listen(3000);
