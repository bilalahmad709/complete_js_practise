var paraElement= document.querySelector("#para");   
 paraElement.innerHTML=`
<h3> Welcome</h3>
<p>This paragraph has been changed, using querselector</p>

`;
paraElement.style.border= "2px solid red";
paraElement.style.padding= " 10px";
paraElement.style.borderRadius= "10px";
console.log(paraElement);

var queryall= document.querySelectorAll(".para");
console.log(queryall);