
document.write(" <h2>Creating array using new Array() method:</h2>");

var ary = new Array(10, 20, "ali", "sajjad", true);
document.write("<ul>");
for (var a = 0; a < ary.length; a++) {
    document.write("<li>" + ary[a] + "</li><br>");
}
document.write("</ul>");

document.write(" <h2>Second example using Arrays</h2>");

var bilal = new Array(4);
bilal[0] = "my";
bilal[1] = "name";
bilal[2] = "is";
bilal[3] = "bilal";
for (var a = 0; a < bilal.length; a++) {
    document.write(bilal[a] + "<br>" );
}

document.write("<h3>Third example of Array, taking value from the user</h3>");

var arr = new Array(3);
for (var g = 0; g < arr.length; g++) {
    arr[g] = prompt("Enter the value:");
}

for (var a = 0; a < arr.length; a++) {
    document.write(arr[a] + "<br>");
}

