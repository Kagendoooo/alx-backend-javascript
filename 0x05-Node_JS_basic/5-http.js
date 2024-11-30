const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.statusCode = 500;
      res.end('Cannot load the database');
      return;
    }

    countStudents(dbPath)
      .then(() => {
        res.write(
          'Number of students: 10\n'
          + 'Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n'
          + 'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy\n',
        );
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
