function showit(nam,age)
{
    console.log(`name of student is ${nam} and age is ${age}`)
}

setTimeout(showit,2000,'ram',23)

setTimeout((marks) => {
    // marks= Math.ceil((Math.random));
   marks= Math.floor(Math.random() * 101);

    console.log(`marks are = ${marks}`)
}, 3000);

let marksheet=setInterval((marks) => {
    // marks= Math.ceil((Math.random));
   marks= Math.floor(Math.random() * 101);

}, 2000);

console.log(`marks of the student= ${marksheet}`)