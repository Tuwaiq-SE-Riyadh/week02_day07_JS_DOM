
//https://www.codegrepper.com/code-examples/javascript/how+to+change+text+color+event+listener+javascript

//https://sebhastian.com/javascript-create-button/
let b =document.createElement("button")
b.innerHTML = "Click Me!";
document.body.appendChild(b);

let b1 =document.createElement("button")
b1.innerHTML = "Click Me1!";
document.body.appendChild(b1);

let b2 =document.createElement("button")
b2.innerHTML = "Click Me2!";
document.body.appendChild(b2);

let b3 =document.createElement("button")
b3.innerHTML = "Click Me3!";
document.body.appendChild(b3);

let b4 =document.createElement("button")
b4.innerHTML = "Click Me4!";
document.body.appendChild(b4);


// was not sure how to implemnt text color change when a cursor move over a text but I found some help at
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event

let d1 =document.querySelector("#paragraph")
let d2 =document.querySelector("#heading")


d1.addEventListener("mouseover", function( e ) {

    e.target.style.color = "orange";
  
    
  }, false);

  d2.addEventListener("mouseover", function( e ) {

    e.target.style.color = "orange";
  
    
  }, false);
  
//the problem remain that the text will not go back to black when the cursor move off of it
  d1.addEventListener("onmouseleave", function( e ) {

    e.target.style.color = "black";
  
    
  },false);

  d2.addEventListener("onmouseleave", function( e ) {

    e.target.style.color = "black";
  
    
  },false);



b.addEventListener("click", function () {
    //https://techfunda.com/howto/444/changing-of-images
    if(document.getElementById("heading").style.fontSize.match("x-large")){
    document.getElementById("heading").style.fontSize = "small";
    }else{
    document.getElementById("heading").style.fontSize = "x-large";
   
}

  });


  b1.addEventListener("click", function () {
    if(document.getElementById("heading").style.fontStyle === "italic"  ){ 
        document.getElementById("heading").style.fontFamily= "Fantasy";
        }else{
        document.getElementById("heading").style.fontStyle = "italic";

        }
});




b2.addEventListener("click", function () {
    
    document.getElementById("paragraph").style.background= "yellow"
    //https://forums.asp.net/t/1816387.aspx?How+to+change+the+background+color+of+certain+text+in+javascript
});

const pic1 = document.querySelector("#img1") 
const pic2 = document.querySelector("#img2")

b3.addEventListener("click", function () {
    pic1.style.visibility = "hidden" 

});



b4.addEventListener("click", function () {
    pic1.style.visibility = "hidden"
   if(pic2.style.visibility === "hidden"){
    pic2.style.visibility = "visible" 
    pic1.style.visibility = "hidden"
  
 
}
   else {
    pic2.style.visibility = "hidden"
    pic1.style.visibility = "visible"
   // break
   }
//https://stackoverflow.com/questions/15318357/show-hide-image-with-javascript 


});

// source https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript/54853688
img1.addEventListener("mouseover", function () {
    img1.src="81+d6eSA0eL._UL1500_.jpg"


});
// source https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript/54853688
img1.addEventListener("mouseout", function () {
    img1.src="http://www.javatpoint.com/images/javascript/javascript_logo.png"


});

//I was looking for a built in right-click action listner in java script but there is non, and that it need to be created manually smoe how, 
// so I fount the code below at:
//https://www.codegrepper.com/code-examples/javascript/right+click+event+listener+javascript
//
img1.addEventListener('contextmenu', (e) => {
	e.preventDefault();
    alert('Mouse right click!');
}, false);



//This is the code for alerting the user when a input is detected in the input field "course"
//it is not working for some reson, I will be asking about this problem later
// for this code I found some help at : https://stackoverflow.com/questions/22496404/get-content-from-id-inside-id
const fo=document.querySelectorAll("#Course").innerHTML

fo.addEventListener('onkeydown', function () {
    alert('Stop it!');


});

//Tried to add the alert when the page is laoded but the did not work. 
//I tried different different ways searched online but no luck. 
const body=document.querySelector("body")

body.addEventListener('onload', function () {
    alert('Page has loaded!');

});












