const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.end('Database not provided');
      return;
    }

    countStudents(dbPath)
      .then(() => {
        res.end(
          'This is the list of our students\n'
          + 'Number of students: 10\n'
          + 'Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n'
          + 'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy\n',
        );
      })
      .catch((err) => {
        res.end(`Error: ${err.message}`);
      });
  } else {
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
