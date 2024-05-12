
const { getUserById, updateUserById } = require('./model');
const express = require('express')
const app = express()
app.use(express.json()) // express json middleware
const port = 3003

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/post', (req, res) => {
  res.send(req.body);
  if (req.body) {
    console.log(req.body);
  }
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  getUserById(id)
  .then(user => res.send(user))
  .catch(err => console.error(err));
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  updateUserById(id, name)
  .then(message => res.send(message))
  .catch(err => console.error(err));
});

/*
const fetch = require('node-fetch');

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  res.send(data);
});
*/

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})