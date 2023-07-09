let one= document.getElementById("one")
let two= document.getElementById("two")
let three= document.getElementById("three")
let four= document.getElementById("four")
let right_arrow= document.getElementById("right_arrow")
one.addEventListener("mouseover",function(){
       two.style.visibility = "hidden";
       three.style.visibility = "hidden";
       four.style.visibility = "hidden";

})
 one.addEventListener("mouseout",function(){
       two.style.visibility = "visible";
       three.style.visibility = "visible";
       four.style.visibility = "visible";

}) 
two.addEventListener("mouseover",function(){
       one.style.visibility = "hidden";
       three.style.visibility = "hidden";
       four.style.visibility = "hidden";
       right_arrow.style.visibility ="hidden";

})
 two.addEventListener("mouseout",function(){
       one.style.visibility = "visible";
       three.style.visibility = "visible";
       four.style.visibility = "visible";

}) 
three.addEventListener("mouseover",function(){
       one.style.visibility = "hidden";
       two.style.visibility = "hidden";
       four.style.visibility = "hidden";

})
 three.addEventListener("mouseout",function(){
       one.style.visibility = "visible";
       two.style.visibility = "visible";
       four.style.visibility = "visible";

}) 
four.addEventListener("mouseover",function(){
       one.style.visibility = "hidden";
       two.style.visibility = "hidden";
       three.style.visibility = "hidden";

})
 four.addEventListener("mouseout",function(){
       one.style.visibility = "visible";
       two.style.visibility = "visible";
       three.style.visibility = "visible";

})