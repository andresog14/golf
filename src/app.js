const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const scoreRoutes = require('./routes/scoreRoutes');
app.use('/scores', scoreRoutes);

app.get('/', (req, res) => {
  res.send('Golf API funcionando');
});

module.exports = app;
