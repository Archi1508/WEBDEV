const express = require("express");
const app = express();
app.get("/", (req,res) => {
    console.log("/ route hit!");
    res.send("Hello");
});
app.get("/users", (req,res) => {
    console.log("/ route hit!");
    res.send("Hello users");
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});