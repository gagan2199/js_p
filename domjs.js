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