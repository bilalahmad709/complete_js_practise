document.getElementById("firstPara").addEventListener("mouseenter", changefirstPara);

function changefirstPara(){
   var element= document.getElementById("firstPara");
   element.setAttribute("style", "border: 10px outset white", " color: black");
   
}

var second= document.getElementById("secondPara");
second.addEventListener("mouseout" ,function(){
second.style.border="2px solid red";
second.style.padding="5px";
second.style.borderRadius="10px";
});