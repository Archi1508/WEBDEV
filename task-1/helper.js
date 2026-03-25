const fs = require("fs");
const path = require("path");

// get index.html file
function getIndexFile() {
    const filePath = path.join(__dirname, "ui", "index.html");
    return fs.readFileSync(filePath, "utf-8");
}

// get card-template.html file
function getCardTemplate() {
    const filePath = path.join(__dirname, "ui", "card-template.html");
    return fs.readFileSync(filePath, "utf-8");
}

module.exports = {
    getIndexFile,
    getCardTemplate
};


//     // fs → File system module readFileSync → Read file synchronously
//     // That is the full address of the file. So this line means: “Go to this exact address and read that file.”
    
//     // If you do: fs.readFileSync(filePath)
// //You will get something like:
// //<Buffer 3c 21 44 4f 43 54 59 ...>
// //That is raw binary.
// //But when you add:
// //"utf-8"
// //Node converts that binary into:
// // A normal readable string.
// //So now you get:
// //"<!DOCTYPE html>\n<html>..."
// //A proper string.
// //}