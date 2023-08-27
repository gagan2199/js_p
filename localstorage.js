localStorage.setItem('name','Ram');
//localStorage.setItem('name','Sham');   //value  with same key will override the item
localStorage.setItem('gender','male')
localStorage.setItem('weight',"71kg")
localStorage.setItem('height','6ft')

// localStorage.removeItem('weight')

let n= localStorage.getItem('weight');

// localStorage.clear();

console.log(n);

let friends=['ram','sham','gita'];
 
localStorage.setItem('friend',JSON.stringify(friends));

let frnd=JSON.parse(localStorage.getItem(friends))

console.log(friends[2]);

let fruits;

if(localStorage.getItem('fruits')){
fruits= JSON.parse(localStorage.getItem('fruits'));
}
else{
    fruits=[];
}

fruits.push('mango');
fruits.push('orange');

console.log(fruits);
 
localStorage.setItem('fruits',JSON.stringify(fruits));