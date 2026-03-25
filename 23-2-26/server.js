// const https = require("https");
// const server = https.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello");
// });
// server.listen(4001, () => {
//     console.log("--------Server is running-------");
// });
// npx nodemon appendFile.js

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end("Hello");
// });

// server.listen(4001, () => {
//     console.log("--------Server is running-------");
// });


// const getData = async()=>{

// }

// const getTotalPrice = (data) => {
//     const { products } = data;

//     const totalPrice = 0;
//     products.forEach((product) => {
//         totalPrice += product.price;
//     });

//     return totalPrice;
// };

// const getProducts = async () => {
//     try {
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//     } catch (err) {
//         console.log("---> Error:", err.message);
//     }
// };

// const main = () => {
//     getProducts();
//     getTotalPrice();
//     console.log(totalPrice);
// };

// main();


console.log("A");

const getData = async () => {
    console.log("B");
    try {
        console.log("C");
        const response = await fetch("https://dummyjson.com/products");
        console.log("D");
        const data = await response.json();
        // console.log("data:", data)
        console.log("E");
    } catch (err) {
        console.log("---> Error:", err.message);
    }
};

console.log("F");
getData();
console.log("G");