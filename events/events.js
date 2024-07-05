
// onclick method
var firstparaElement = document.getElementById("firstPara");
firstparaElement.onclick = firstParachange;

function firstParachange() {
    firstparaElement.style.color = "red";
    firstparaElement.style.backgroundColor="lightgreen";
    firstparaElement.style.padding="10px";
    firstparaElement.style.borderRadius="10px";
    firstparaElement.style.fontWeight="bolder";
}


//  ondoubleclick method
var secondparaElement= document.getElementById("secondPara");
secondparaElement.onclick= secondParachange;

function secondParachange(){
    secondparaElement.style.color="orange";
    secondparaElement.style.backgroundColor="black";
    secondparaElement.style.padding="10px";
    secondparaElement.style.borderRadius="10px";

    secondparaElement.innerHTML=`
    <h3>the text of this paragraph has been changed.</h3>
    `;
}


// onrightclick method
var thirdparaElement = document.getElementById("thirdPara");
thirdparaElement.oncontextmenu = thirdParachange;

function thirdParachange() {
    var thirdparaElement= document.getElementById("thirdPara");
    thirdparaElement.className = "thirdparacss";
}
