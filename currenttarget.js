let btn= document.getElementsByTagName('button');

let heading= document.getElementById('head');

let lnk= document.getElementById('lnk');

// heading.addEventListener('click',(element)=>
// {
//     heading.style.color='red';
// })

heading.addEventListener('click',(event)=>
{
    heading.style.color='red';
    console.log(event.currentTarget);
    console.log(event.type);
})

function abcd(e)
{
    e.preventDefault();
}

lnk.addEventListener('click',abcd);