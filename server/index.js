const setupServer = require("./server");
const PORT = process.env.PORT || 4000;
const server = setupServer();


(()=>{
  server.listen(PORT, ()=>{
    console.log(`hello from your server @ http://localhost:${PORT}`);
  });
})()

