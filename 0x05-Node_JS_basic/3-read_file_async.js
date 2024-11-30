const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.trim().split('\n').filter((row) => row.trim() !== '');
      if (rows.length < 2) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const [, ...students] = rows;
      const fields = {};
      students.forEach((row) => {
        const [firstname, , , field] = row.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      console.log(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
