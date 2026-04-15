const {Schema,model} = require("mongoose");
const playerSchema = new Schema({
    name:
    {
        type: String,
        required: true,
        trim: true,
    },
    username: 
    {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
     email:
    {
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    avatarUrl: String,
    skills:
    {
        type: String,
        enum:["Survival", "Combat", "Defense","Stealth"],
    },
});
const Player = model("Player",playerSchema);
module.exports={Player};


// WAYS TO SEND DATA FROM FRONTEND TO BACKEND 
// urL PARAMSE
// SOMETHING AFTER ? ( QUERY PARAMSE )
// BODY FORMAT,BINARY,RAW,FORM 
// HEADERS