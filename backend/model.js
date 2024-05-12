const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT, email TEXT)', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Users table created.');
  
    // Insert some random user data
    const insert = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.run(insert, ['Alice', 'alice@example.com']);
    db.run(insert, ['Bob', 'bob@example.com']);
    db.run(insert, ['Charlie', 'charlie@example.com']);
  });
const getUserById = (id) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err.message);
        }
        resolve(row);
      });
    });
  }

  const updateUserById = (id, name) => {
    return new Promise((resolve, reject) => {
      db.run('UPDATE users SET name = ? WHERE id = ?', [name, id], (err) => {
        if (err) {
          reject(err.message);
        }
        resolve(`User with ID: ${id} updated with name: ${name}`);
      });
    });
  }
  
  module.exports = {
    getUserById,
    updateUserById
  };