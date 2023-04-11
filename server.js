const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT * FROM CUSTOMERS",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.listen(port, () => console.log(`${port}에서 대기중입니다.`));
