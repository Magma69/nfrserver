const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello, world!');
});

app.listen(3000);