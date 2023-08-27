let ib1=document.getElementById('ib');

let div1=document.createElement('div');
let txt= document.createTextNode('this is our div1');

let smallheading= document.createElement('h2');
smallheading.innerText=`This is our small heading`

document.body.prepend(smallheading);

div1.appendChild(txt);
// document.body.appendChild(div1)

document.body.insertBefore(div1,ib);

// div1.remove();

// document.body.removeChild(div1);

randomVar= 'random value';
secondVar= 'second data'
thirdVar='third data'

let elm= document.createElement('ul');


elm.innerHTML=`<li class="abc">${randomVar}</li> <li class="abc">${secondVar}</li> <li class="abc">${thirdVar}</li>`

document.body.appendChild(elm);


div1.innerHTML=`this is innerhtml`                  //same work
div1.textContent=`this is textcontent`              //same work
