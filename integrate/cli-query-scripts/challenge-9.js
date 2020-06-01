/*
  user input: table name, column name, search string, number of entries
  logged data: return a given number of rows matching the search parameter
*/

const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const DB_PATH = path.join(__dirname, "..", "chinook.sqlite");

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  column: process.argv[2],
  table: process.argv[3],
  search: process.argv[4],
  amount: process.argv[5],
};

const queryString = `SELECT ${userInput.column} FROM ${userInput.table}
 WHERE ${userInput.column} LIKE '%${userInput.search}%' LIMIT ${userInput.amount}`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
