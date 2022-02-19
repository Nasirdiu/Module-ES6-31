//delear function 
function add(num,num2){
    return num+num2;
}
//function expresstion
const add1= function add1(num,num2){
    return num+num2;
}
//function anonemus 
const add2= function(num,num2){
    return num+num2;
}
//arrow function 
const arrow = (num,num2) => num+num2;
const resultArrow=arrow(20,80);

const result=add1(20,21);
const result1=add1(20,21);
const result2=add1(20,21);
console.log( result,result1,result2,resultArrow);