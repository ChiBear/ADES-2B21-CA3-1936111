//test
const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');
const path = require('path');

let db = null;
const app = express();

const port = 8080;

app.use(express.json());

/* app.post('/create-user', async(req, res, next)=>{
  const name = req.body.name;

  await db.query("INSERT INTO users (name) VALUES (?);", [name]);

  res.json({status:"OK"});
  next();
}); */

/* async function main(){
  db = await mysql.createConnection({
    host:"us-cdbr-east-04.cleardb.com",
    user: "b6e05cec84f34e",
    password: "ff7b7821",
    database: "heroku_18ab3a72081d060"
  });

  app.listen(8080);
}

main(); */

app.listen(port,()=>{
  console.log(`Listening on port: ${port}`)
});

module.exports = app; // DO NOT DELETE