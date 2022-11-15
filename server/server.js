const express = require("express");
const db = require("../db/knex");
require ("dotenv").config();
const path = require("path");


function setupServer () {
  const app = express();

  app.use(express.static(path.resolve(__dirname,"../client/build")))
  app.use(express.json());


  app.get("/", (req, res) => {
    res.status(200).send("Your server is working!");
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


  app.get("/roles", async (req, res) => {
    try{
      const roles = await db("roles")
      .select("*")
      .timeout(1500);
      roles.length > 0
      ? res.status(200).send(roles)
      : res.status(404).send("no roles found");
    }catch(err){
      res.status(500).send(err);
    }
  });


  app.get("/routes", async (req, res) => {
    try{
      const routes = await db("routes")
      .select("all_routes")
      .timeout(1500)
      routes.length > 0
      ? res.status(200).send(routes)
      :res.status(400).send("no routes found")
    }catch(error){
      res.status(500).send(err);
    }
  });




  

  return app;
}

module.exports = setupServer;