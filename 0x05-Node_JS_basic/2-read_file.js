const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    if (rows.length < 2) {
      console.log('Number of students: 0');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
