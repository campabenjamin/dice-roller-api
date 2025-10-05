const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static(__dirname));

app.get('/roll', (req, res) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  res.json({ result: roll });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
