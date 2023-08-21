let a1=[10,20,30,40,50];


let a2= a1.map((value)=>
{
    return value+1;
})

console.log(a2);


let a3= a1.filter((a)=>
{
    return a>20;
})

console.log(a3);


let a4= a1.reduce((h1,h2)=>
{
    return h1+h2;
})

console.log(a4);