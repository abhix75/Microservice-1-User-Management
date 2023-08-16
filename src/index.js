// index.js
const express = require("express");
const apiRoutes = require("./routes");
const  ServerConfig= require('./config/server-config')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);



app.listen(ServerConfig.PORT, () => {
  console.log(`Users microservice is running on port ${ServerConfig.PORT}`);
});
