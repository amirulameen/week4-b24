var fullName = "Amirul Amin"
function sayHello(){
  // a local variable: var that is define inside the curly brackets
  var myName = "Amirul";
  console.log("Hello " + myName);  // over here myName can be call out because var myName is call out within the curly bracket
  console.log("My full name is " + fullName); // fullName is a global var, hence we can call it anywhere on the code
}

console.log("Hello " + myName);  // myName is a local var hence it the program cannot define it outside the curly bracket
console.log("My full name is " + fullName);
