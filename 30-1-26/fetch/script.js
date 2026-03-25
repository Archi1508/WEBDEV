const successCB = () => {
    console.log("Done..")
};
const errorCB = () =>{
    console.log("Error...")
}
const pr=fetch("https://leetcode.com/ ")

pr.then().catch();
