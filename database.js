//just connects to the daatabase

const sqlite3 = require('sqlite3').verbose(); //when throw error message show more detailed error msg


var connection = new sqlite3.Database('./shopping_ex2.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the shopping orders database.');
});

module.exports = { connection };