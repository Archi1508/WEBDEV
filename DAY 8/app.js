const express=require("express");
const morgan=require("morgan");
const dotenv = require("dotenv");
const {v1Router}=require("./api/v1/routess.js")
dotenv.config();
require("./config/database.js");
const app=express();
app.use(morgan("dev"));
app.use("/api/v1",v1Router);
const PORT = process.env.PORT  ?? 3000;
console.log("-->",process.env)

app.listen(PORT, () => {
    console.log("<-------------------Server is running------------------>")
});

