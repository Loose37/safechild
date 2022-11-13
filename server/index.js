const setupServer = require("./server");
const db = require("../db/knex");
const PORT = process.env.PORT || 4000;
const server = setupServer();

(async()=>{
  try{
    await db.migrate.latest();
    await db.seed.run();
    server.listen(PORT, ()=>{
      console.log(`hello from your server @ http://localhost:${PORT}`);
    });
  } catch (err){
    console.log (err);
  }
 
})()

