let a = 10;
const b = true;
a = "abc";
a = true;

function addTwoNumbers(a,b){  // Function Declartion
    console.log("Calling Function")
    return a+b;
}

const addingTwoNumbers = function(a,b){ // Function Expression
    return a+b;
}

const areaOfrectangel = (a,b) =>{ // Arrow Functions
    return a*b;
}
