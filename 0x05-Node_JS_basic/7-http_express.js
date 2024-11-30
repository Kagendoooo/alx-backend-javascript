const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(() => {
      res.write('This is the list of our students\n');
      res.end();
    })
    .catch((error) => {
      res.write(`${error.message}\n`);
      res.end();
    });
});

app.listen(1245);

module.exports = app;
