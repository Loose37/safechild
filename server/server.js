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


  // app.get("/routes", async (req, res) => {
  //   try{
  //     const route1 = await db("route_1")
  //     .join()
  //     .select("student_unique_ID")
  //     .timeout(1500);
  //     const route2 = await db ("route_2")
  //     .select("student_unique_ID")
  //     .timeout(1500);
  //     route2.length > 0
  //     ? res.status(200).send(route1,route2)
  //     :res.status(400).send("no routes found")
  //   }catch(error){
  //     res.status(500).send(err);
  //   }
  // });




  

  return app;
}

module.exports = setupServer;