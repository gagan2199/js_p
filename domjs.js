let listItems=document.getElementsByTagName('li');

let lic= [...listItems]

// li1.array.forEach(element => {
//     console.log(element);
// });

console.log(listItems);
console.log(lic);

listItems[0].style.color="red";

for(let i=0;i<4;i++)
{
    document.write("abc "+ listItems[i].innerHTML+" <br>" );
}

console.log(document.body.firstChild); //will give us frst child of body
console.log(document.body.lastChild); //will give us last child of body
console.log(document.body.childNodes); //will give us all nodes of body


document.write(document.body.childNodes[3].innerHTML);

