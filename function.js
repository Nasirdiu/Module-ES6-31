//system function old 
/* function add(num,num1){
    // console.log(num,num1);
    if(num1==undefined){
        num1 =0;
    }
    const total =num+num1   
    return total;
}
const result=add(15);
console.log(result); */

//ES-6
function add(num,num1=15){

    const total =num+num1   
    return total;
}
const result=add(15,10);
console.log(result);