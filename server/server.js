const express = require("express");
const db = require("../db/knex");
require ("dotenv").config();
const path = require("path");


function setupServer () {
  const app = express();

  app.use(express.static(path.resolve(__dirname,"../client/build")))
  app.use(express.json());


  app.get("/", (req, res) => {
    res.status(200).send("this is your test homepage");
  });
  
  
  app.get("/testdb", async (req, res) => {
    try{
      const students = await db("students")
      .select("*")
      .timeout(1500);
      students.length > 0
      ? res.status(200).send(students)
      : res.status(404).send("no students found");
    }catch(err){
      res.status(500).send(err);
    }
  });

  

  return app;
}

module.exports = setupServer;