let btn1 = document.querySelectorAll('.btn');

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

btn1.forEach(function (element) {
    element.addEventListener('click',function (e)
    {
        console.log(e.currentTarget);

        // e.currentTarget.style.color='white';
        // e.currentTarget.style.backgroundColor='black';
        e.target.style.color='white';                    // target will target only clicked items
        e.target.style.backgroundColor='black';
    })
});

function abcd(e)
{
    e.preventDefault();
}

lnk.addEventListener('click',abcd);