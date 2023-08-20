let fname="gagan ", lname="kumar";

let cname=fname.concat(lname);

let frstword= cname.charAt(0)
let lstword= cname.charAt((cname.length)-1)

document.write("<br>"+cname)
document.write("<br>"+frstword)
document.write("<br>"+lstword)

document.write("<br>"+fname+lname)

let fullname=(fname+lname).toUpperCase()

document.write("<br>"+fullname);
console.log(fullname);