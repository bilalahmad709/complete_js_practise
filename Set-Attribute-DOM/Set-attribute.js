   // Setting the inner HTML of the greeting element
   var greeting = document.getElementById("greeting");
   greeting.innerHTML = "Welcome to my channel";

   // Changing the inner text of para1
   var para1 = document.getElementById("para1");
   para1.innerText = "The inner text has been changed";

   // Setting a style attribute for the second paragraph
   var secondpara = document.getElementById("secondparagraph");
   secondpara.setAttribute("style", "border: 3px solid blue");

   // Function to modify the second paragraph
   function modifySecondPara() {
       var secondpara = document.getElementById("secondparagraph");
       secondpara.style.border= "2px dotted blue";
       secondpara.style.fontSize = "20px";
       secondpara.style.padding = "10px";
       secondpara.style.backgroundColor = "yellow";
       secondpara.style.fontFamily = "'Poppins', sans-serif";
   }