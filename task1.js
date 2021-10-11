function start(){
    alert("the page has load ")
    let ele=document.getElementById("paragraph");
     ele.addEventListener("mousemove",help,false)
     ele.addEventListener("mouseout",help2,false)
     let b1=document.getElementById("but1")
     b1.addEventListener("click",help3,false)
     let b2=document.getElementById("but2")
     b2.addEventListener("click",help7,false)
     let b3=document.getElementById("but3")
     b3.addEventListener("click",help4,false)
     let b4=document.getElementById("but4")
     b4.addEventListener("click",help5,false)
     let b5=document.getElementById("but5")
     b5.addEventListener("click",help6,false)
     let ele2=document.getElementById("img")
     ele2.addEventListener("mousemove",help10,false)
     ele2.addEventListener("mouseout",help11,false)
     ele2.addEventListener("click",help12,false)

     let ele3=document.getElementById("name")
     ele3.addEventListener("change",help13,false)
     let ele4=document.getElementById("course")
     ele4.addEventListener("change",help13,false)
   
}


function help(){
    document.getElementById("paragraph").innerHTML="<p id='paragraph' style='color: yellow;''>W02D02-Lab in JavaScript course is about Scripting and Event Handling DOM!</p>"
}
function help2(){
    document.getElementById("paragraph").innerHTML="<p >W02D02-Lab in JavaScript course is about Scripting and Event Handling DOM!</p>"
}

function help3(){
    document.getElementById("heading").style.fontSize="50px"
}

function help4(){
    document.getElementById("paragraph").style.background="red";
}
function help5(){
    document.getElementById("img").src="";
}
function help6(){
    document.getElementById("img").src="JS2.png";
}

function help7(){
    document.getElementById("paragraph").style.fontStyle="Times"
}

function help10(){
    document.getElementById("img").src="JS2.png";
}

function help11(){
    document.getElementById("img").src="http://www.javatpoint.com/images/javascript/javascript_logo.png";
}
 // ask 
function help12(){
    alert("You are click on img!");
}
function help13(){
    alert("We see the modification of your data");
}


window.addEventListener("load",start,false);
