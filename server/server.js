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



  app.post("/children", async (req,res) => {
    try{
      const route = req.body.route;
      console.log(route)
      if (route === "route_1"){
        const childrenData = await db("students")
        .where({route:"route_1"})
        .select("*")
        res.status(200).send(childrenData)
      }
      if (route === "route_2"){
        const childrenData = await db("students")
        .where({route:"route_2"})
        .select("*")
        res.status(200).send(childrenData)
      }else{
      }
    } catch (error) {
      console.log (error)
    }
  })


  app.post("/events", async (req,res) => {
    try {
      const route = req.body.route
      const event = req.body.event
      // const child = req.body.child
      const time = req.body.time
      const ID = req.body.ID

      if(event === "got_on_bus" && route === "route_1"){
        console.log (event,time,ID)
        await db("route_1_events")
        .insert({got_on_bus:true,time_when_got_on_bus:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_on_bus" && route === "route_2"){
        console.log (event,time,ID)
        await db("route_2_events")
        .insert({got_on_bus:true,time_when_got_on_bus:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_off_bus" && route === "route_1"){
        console.log (event,time,ID)
        await db("route_1_events")
        .insert({got_off_bus:true,time_when_got_off_bus:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_off_bus" && route === "route_2"){
        console.log (event,time,ID)
        await db("route_2_events")
        .insert({got_off_bus:true,time_when_got_off_bus:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_to_class" && route === "route_1"){
        console.log (event,time,ID)
        await db("route_1_events")
        .insert({got_to_class:true,time_when_got_to_class:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_to_class" && route === "route_2"){
        console.log (event,time,ID)
        await db("route_2_events")
        .insert({got_to_class:true,time_when_got_to_class:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_out_of_class" && route === "route_1"){
        console.log (event,time,ID)
        await db("route_1_events")
        .insert({got_out_off_class:true,time_when_got_out_of_class:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }
      if(event === "got_out_of_class" && route === "route_2"){
        console.log (event,time,ID)
        await db("route_2_events")
        .insert({got_out_off_class:true,time_when_got_out_of_class:time,student_unique_ID:ID })
        res.status(200).send("😎")
      }

      
    } catch (error) {
      console.log(error)
    }
  })



  return app;
}

module.exports = setupServer;