document.write("<h2>Modification of Array :</h2>");

// changing of a name/value with another
var a = ["My name ", "is", "ali"];
document.write(a + "<br>");
a[2] = "bilal";
document.write(a);


// sort method

document.write("<!-- sort/ (arranging in alphabetic order) method -->");
document.write("<br><br>");
document.write("<h2>Sort() method of Array</h2>");

document.write(" before sorting it will print like this : <br><br>");

var a = ["khan", "shahid", "Bilal", "Ali"];
document.write(a);

document.write("<br><br> After sorting it will print like this : <br><br>");
a.sort();
document.write(a);


// reverse method
document.write("<!-- for printing in reverse order we use reverse() method -->");

document.write("<h2>Reverse() method of Array</h2>");

document.write(" <h4>before reversing it will print like this :</h4> <br>");

var a = ["khan", "shahid", "Bilal", "Ali"];
document.write(a);

document.write("<br><h4>After reversing it will print like this : </h4>");
a.reverse();
document.write(a);

// concat method
document.write("<h2>concat() method of Array</h2>");

var a = ["khan", "shahid", "Bilal", "Ali"];
document.write("<br>");
var b = ["shan", "kamil"];

document.write("<br>");
var c = a.concat("wali", "mula");

document.write(c);

document.write("<br>");
var d = a.concat(b, c);

document.write("<br>" + d);

// remove method

document.write("<h2>Remove Method Of Array:</h2> <br>");
document.write(" A Remove() method is used to remove/Delete a value from an Array. for example: <br><br>");

var bilal=['My', 'Name', 'is', 'Bilal', 'khan'];

document.write("Before applying remove() method it will look like:<br>");
document.write(bilal +"<br><br>");

document.write("After applying Remove() method it will look like this: i.e 'khan' will be removed <br><br>");
delete bilal[4];
document.write(bilal);

// POP method
document.write("<br> <h2> POP() method of Array:</h2><br>");
document.write("<p> POP() method is used to delete the last element of the Array, such as</p>");

var a= ['bilal','ali','shayaan', 'huzaifa', 'akram'];

document.write("<br>" + a + "<br>");

document.write("<br> After applying POP() method it will look like this: i-e the last element(akram) will be deleted. <br><br>");
a.pop();

document.write(a);
