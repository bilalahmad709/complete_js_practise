// targetting the text only using innertext 
var paragraph=document.getElementById("paragraph").innerText;
console.log(paragraph);

// targetting the html using innerhtml

var paragrap = document.getElementById("secondparagraph").innerHTML;
console.log(paragrap);

// get attributes

var attribut = document.getElementById("secondparagraph").getAttribute("style");
console.log(attribut);

// get AttributeNode

var attributeNode = document.getElementById("secondparagraph").getAttributeNode("class");
console.log(attributeNode);

// attributes

var aTTributes= document.getElementById("secondparagraph").attributes;
console.log(aTTributes);