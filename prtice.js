const bigName=[20,1,22,55,58,6,96,7,8,88,99,100,545,666,888,4,52,];
const search=Math.max(...bigName);
// console.log(search);

const name=['hello','tumi','koi','aso','akon'];
const nameAdd=`hello ${name}ami akon dhaka asi jodi multi korle${name.length*5}`
// console.log(nameAdd);

const add=num=>num/10;
const total=add(20);
// console.log(total);

const onk=(x,y,z)=>{
    const xx=x+y;
    const yy=x-y;
    const zz=z*y;
    const result=xx+yy+zz;
    return result*2;
}
const num=onk(10,5,3);
console.log(num);