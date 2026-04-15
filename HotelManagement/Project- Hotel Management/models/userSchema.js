const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
        // created at, updated at
    }
);

const User = model("user", userSchema);

module.exports = { User };