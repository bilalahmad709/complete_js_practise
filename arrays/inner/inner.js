document.write("<br> Before applying 'innerText' propert it will print like this: <br><br>");

document.write(" welcome to my youtube channel <br><br>");

document.write("After applying 'innerText' property it will change to: <br>");

let changes= document.getElementById('channel');
changes.innerText="welcome to our shop";

// background color before
changes.style.backgroundColor="lightyellow";
changes.innerText.style.backgroundColor="pink";
document.write(changes.innerText);