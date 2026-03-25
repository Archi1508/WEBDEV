const secondElement=document.getElementById
("second")
let time =0;
let intervalId=null;
const handleStart=()=>{
    setInterval(handleUI,1000)
};
const handleUI = () =>{
    time+=1;
    secondElement.innerText=time;
};
const handleStop = ()=>{
    clearInterval(intervalId)
};