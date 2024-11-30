const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbFile = process.argv[2];

  if (!dbFile) {
    res.status(400).send('Database file missing');
    return;
  }

  res.status(200).write('This is the list of our students\n');

  countStudents(dbFile)
    .then((data) => {
      res.end(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(1245);
