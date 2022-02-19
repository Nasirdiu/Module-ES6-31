const add=(sum1,sum2)=>sum1+sum2;

const total=add(20,10);
console.log(total);

const add1= sum1=>sum1*10;
const total1=add1(5);
console.log(total1);

const getName= () => 'Nasir';
const total2=getName();
console.log(total2);

//multiline korte chile {} use korte hba & return korte hba..

const math=(x,y)=>{
    const plus=x+y;
    const minus=x-y;
    const result=plus*minus;
    return result*5;
}

const resultAll=math(20,10);
console.log(resultAll);
