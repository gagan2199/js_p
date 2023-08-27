localStorage.setItem('name','Ram');
//localStorage.setItem('name','Sham');   //value  with same key will override the item
localStorage.setItem('gender','male')
localStorage.setItem('weight',"71kg")
localStorage.setItem('height','6ft')

// localStorage.removeItem('weight')

let n= localStorage.getItem('weight');

// localStorage.clear();

console.log(n);