const handleRoot = (ev) => {
    console.log("root clicked");
    console.log(ev,ev.target);
};

const handleParent = (ev) => {
    console.log("parent clicked");
    console.log(ev,ev.target);
};

const handleChild = (ev) => {
    console.log("child clicked");
    console.log(ev,ev.target);
};
const rootElement = document.getElementById("root");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");


childElement.addEventListener("click", handleChild,true); //true means capturing phase 
parentElement.addEventListener("click",handleParent,false); // false means buble phase default
rootElement.addEventListener("click",handleRoot,true); // flow is root child parent

