// global scope
function myFunc(){
  return 42;
}
const myVar = myFunc() + 2
myVar

// function scope 
function myFunc(){
  // any code within a function whihc is executable .
  const myVar = 42
  return myVar * 2
}
myFunc()

// block scope
if(true){
  var Mrvariable = 42
}
Mrvariable
// if var declare it it not blocked scoped but when const and let do that it scope 
if(true){
  const num = 42 
  let OtherNm = 9001
}
num 
OtherNm
//name the  two main term used to declare variables
if (true){
  lastName = 'lovelace'
}
lastName;
// output = lovelace 
function bankccount(){
  secretPassword = '#1Dsq123'
  return 'bankAccount()invoked'
}
secretPassword
