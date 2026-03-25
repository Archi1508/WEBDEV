const rootElement=document.getElementById("root")
const getRandomColorVal=()=>{
    const randomVal = Math.random();
    const scaledVal=randomVal*255;
    const floorVal=Math.floor(scaledVal);
    return 
}
const callBack=()=>{
    rootElement.style.backgroundColor="rgb($(red),$(green),$(blue))";
   const red=getRandomColorVal();
   const green=getRandomColorVal();
   const blue=getRandomColorVal();
    console.log("floorVal,floorVal");
};
const delay=5000;
   setTimeout(callBack,delay); 
window.setInterval(callBack,5000);
