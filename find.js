let mantra=[
    {fw:"om", sw:"namah", tw:"shivaaye"},
    {name:"ram",id:1,marks:100},
    {name:"sham",id:2,marks:99}
]

console.log(mantra[1].id)

console.log(mantra.find((element)=>
{
    return element.id===1;
}))