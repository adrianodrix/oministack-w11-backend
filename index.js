const express = require('express');

const app = express();

app.get('/hello/:name*?', (req, res) => {
  const { name } = req.params;

  return res.json({
    message: `Hello World ${name}`
  });
});

app.listen(3333);

