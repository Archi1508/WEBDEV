const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URL,{
    dbName:"game-database",

})
.then(()=>{
    console.log("__________DB Coonected________");

})
.catch((err)=>{
    console.log("________Error in db coonection_________",err.message);
});
