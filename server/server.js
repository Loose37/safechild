const express = require("express")

function setupServer () {
  const app = express();


  app.use(express.json())


  app.get("/", (req, res) => {
    res.status(200).send("this is your test homepage");
  });


  
  
  
  return app;
}

module.exports = setupServer;