const {} = require("mongoose");
const playSchema = new Schema({
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
    avatarUrl: String,
    skills:
    {
        type: String,
        enum:["Survival", "Combat", "Defense","Stealth"],
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
});
const Player = model("Player",playerSchema);
module.exports=Player;