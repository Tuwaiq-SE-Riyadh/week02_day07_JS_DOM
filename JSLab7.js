
 function myFunction() {

    document.getElementById("heading").style.fontSize="60px";
 }

 function myFunction2() {

    document.getElementById("paragraph").style.fontStyle="italic";
    document.getElementById("paragraph").style.backgroundColor="yellow";
 }

 function myFunction3() {

    document.getElementById("hide").style.visibility="hidden";
    
 }

 function myFunction4() {

    document.getElementById("hide").src="https://www.logolynx.com/images/logolynx/52/523dfb2475fa3bbbec5f92b9d40049a3.jpeg";
 }

 //Changing image
 function myFunction5() {

    document.getElementById("hide").src="https://www.logolynx.com/images/logolynx/52/523dfb2475fa3bbbec5f92b9d40049a3.jpeg";
     
 }
 function myFunction6() {

    document.getElementById("hide").src="http://www.javatpoint.com/images/javascript/javascript_logo.png";
     
 }

 //highlight paragrapgh
 function myFunction7() {

    document.getElementById("paragraph").style.backgroundColor="yellow";
     
 }
 function myFunction8() {

    document.getElementById("paragraph").style.backgroundColor="white";
     
 }



    document.getElementById("hide").addEventListener("contextmenu", function(event){event.preventDefault(); alert("Alert");})
 

 //Alert when the user enters data
 
    document.getElementById("form").addEventListener("keyup", function(){alert("Alert");})
     
 

  //Alert when the user upload

 window.addEventListener("load",function (){alert("Alert");})
     



