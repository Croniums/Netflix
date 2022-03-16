var element = document.getElementById("element");
var element1 = document.getElementById("element1");
var element2 = document.getElementById("element2");
//flèches
var leftarrow = document.getElementById("leftarrow")
var rightarrow = document.getElementById("rightarrow")
var leftarrow1 = document.getElementById("leftarrow1")
var rightarrow1 = document.getElementById("rightarrow1")
var leftarrow2 = document.getElementById("leftarrow2")
var rightarrow2 = document.getElementById("rightarrow2")


rightarrow.addEventListener("click", scrollright);
leftarrow.addEventListener("click", scrollleft);
rightarrow1.addEventListener("click", scrollright1);
leftarrow1.addEventListener("click", scrollleft1);
rightarrow2.addEventListener("click", scrollright2);
leftarrow2.addEventListener("click", scrollleft2);




function scrollleft() {
    element.scrollLeft -= 300;
}
function scrollright() {
    element.scrollLeft += 300;
}

function scrollleft1() {
    element1.scrollLeft -= 300;
}
function scrollright1() {
    element1.scrollLeft += 300;
}

function scrollleft2() {
    element2.scrollLeft -= 300;
}
function scrollright2() {
    element2.scrollLeft += 300;
}



