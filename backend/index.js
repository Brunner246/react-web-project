const express = require('express')
const app = express()
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