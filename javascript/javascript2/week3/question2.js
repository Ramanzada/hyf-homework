//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions
const func1 = () => console.log("Function 1");
const func2 = () => console.log("Function 2");
const func3 = () => console.log("Function 3");

const funcArray = [func1, func2, func3];

funcArray.forEach(func => func());

//Create a function as a const and try creating a function normally. Call both functions.
const funcAsConst = () => console.log("Function as constant");
function funcNormally() { console.log("Function created normally") }

funcAsConst(); //Output: Function as constant
funcNormally(); //Output: Function created normally

//Create an object that has a key whose value is a function. Try calling this function.
const obj = {
    funcKey: () => console.log("Function from object")
  };
  
  obj.funcKey(); //Output: Function from object
  