const fs = require("fs");
const path = require("path");

const { getIndexFile, getCardTemplate } = require("./helper");
const { getDummyProducts } = require("./data");

let indexHTML = getIndexFile();
let cardTemplate = getCardTemplate();
const products = getDummyProducts();
let allCards = "";

products.forEach(product => {

    let singleCard = cardTemplate
        .replace("__IMG_LINK__", product.img)
        .replace("__TITLE__", product.title)
        .replace("__PRICE__", product.price);

    allCards += singleCard;
});
let finalHTML = indexHTML.replace("__PLACE_HOLDER__", allCards);
const outputPath = path.join(__dirname, "output.html");

fs.writeFileSync(outputPath, finalHTML);

console.log("✅ output.html generated successfully!");
