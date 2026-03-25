// callback is a  function called by the handler 
// callback helps execute logic (synchronous --> line by line )
const print = (text) => {
    console.log("----------------")
    console.log("-->" , text)
    console.log("---------------")
};
const add =(a,b) =>{
    const ans =a+b;
    return ans;
};

const multiply =(a,b) =>{
    const ans =a*b;
    return ans;
}
const result =add(200,300);
const finalResult = multiply(result,1.18);
print(finalResult);
// firstly memory is allocated to all funactions initially value is unavailable

// then when it comes to result it sees add function so now it executes add function

// in javascript functions are first class citizens that is they are treated as any other number or string

// during function call  you can pass another function as argument 

// A callback is a function that is: passed as an argument and called later inside another function

// intentinally empty is null and unintentinally is undefined
