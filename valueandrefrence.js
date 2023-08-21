const a={name:"ram"}

let b=a;

console.log("frst name " +a.name)
console.log("scnd name " +b.name)

// b.name="sham";

// console.log("frst name " +a.name)
// console.log("scnd name " +b.name)

 b={...a};
 b.name="sham";

// solution
console.log("frst name " +a.name)
console.log("scnd name " +b.name)