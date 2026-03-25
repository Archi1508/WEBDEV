// NON PRIMITIVE 
// OBJECT,ARRAY,DATE, MAP, SET
// basics 
// refrence are stored in stack annd value in heap memory
// if order doesnt maater go with objects otherwise array
// creating a object
// const obj={
//     name:"Archi",
//     org:"abc",
//     city:"delhi",
// }

// // CRUD

// // read
// console.log(obj);

// // UPDATION
// // add a key value pair in object
// obj["Branch"]="CSE"
// console.log(obj);

// // reading single value by key
// console.log("name");

// // DELETION
// delete obj["name"];
// console.log(obj);
// ...............................................................................................

// const city ={
//     "City Name":"Delhi"
// }
// const capitalOfIndia ={
//     "City Name":"Delhi"
// }
// if(city==capitalOfIndia)
// {
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// const city ={
//     "City Name":"Delhi"
// }
// const capitalOfIndia = city;
// console.log(city);
// console.log(capitalOfIndia)
// capitalOfIndia.population="2 CR";
// console.log(city);
// console.log(capitalOfIndia);

// const student ={
//     name:"Raj",
//     city:"Noida",
//     age:23,
//     marks:{
//         maths:50,
//         evs:55,
//     },

// };
// const{city}=student;
// console.log("city",city);
// console.log("country",country)


// mutable non primitive are mutable that is we can change some value of it


// const student ={
//     name:"Raj",
//     city:"Noida",
//     age:23,
//     marks:{
//         maths:50,
//         evs:55,
//     },

// };
// const{city,marks}=student;
// console.log("city",city);
// console.log("marks",marks);
// console.log("student",student);
// city="Delhi";
// marks.evs=40;
// console.log("student",student);

// ------------------------------------------------------------------

const raj ={
    name:"Raj",
    city:"Noida",
    age:23,
};
console.log(raj);
console.log({...raj});


const ram={...raj};
console.log(raj);
console.log(ram);
ram.name="abc";
console.log(ram);
console.log(raj);


