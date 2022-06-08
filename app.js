const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.join(__dirname,"/public");
const homeRoute = require("./routes/home.js");

app.listen(3000,()=>console.log("Funcionando 3000"));
app.use(express.static(publicPath));
app.use("/", homeRoute);