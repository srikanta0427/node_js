let x = 10;

const sum = (a, b)=>{
    return a+b;
}

module.exports={lol:x, sum};

// here why lol:x cause here we use let x suppose in another js imported this file and use same variable it gives error that's why we give different name to the varible 
