let ib1=document.getElementById('ib');

let div1=document.createElement('div');
let txt= document.createTextNode('this is our div1');

div1.appendChild(txt);
// document.body.appendChild(div1)

document.body.insertBefore(div1,ib);
