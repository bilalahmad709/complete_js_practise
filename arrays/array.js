var subject=["urdu, islamiat, science, pashto, english"];
document.write(subject);
document.write("<br><br>");
document.write("<!-- printing of array in the form of list. -->");

document.write("<h2>for printing numeric values in array using for loop</h2>");


var values=[10,20,30,40,50,60];
for(var i=0;i<=5;i++){
    document.write(values[i] +"<br>")
}
document.write("<br>");

document.write("<h2>printing array in the form of list </h2>");


var olvalues=[2,4,6,8,10,12,14];

document.write("<ul>");
for(a=0;a<=5;a++){
    document.write( "<li>"+ olvalues[a] + "</li>");
}
document.write("</ul>");