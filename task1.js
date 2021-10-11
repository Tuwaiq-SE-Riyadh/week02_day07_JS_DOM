const btn = document.createElement("button");
btn.innerHTML = "h1 size";
document.body.append(btn);

const h1 =document.querySelector("h1");

btn.addEventListener("click", function (e) {
    h1.style.fontSize="80px" 

});

const btn1 = document.createElement("button");
btn1.innerHTML = "style p";
document.body.append(btn1);

const p =document.querySelector("p");

btn1.addEventListener("click", function (e) {
    p.style.fontStyle="oblique"

});


const btn2 = document.createElement("button");
btn2.innerHTML = "style highlighted";
document.body.append(btn2);


btn2.addEventListener("click", function (s) {
p.style.backgroundColor="pink";
});

const btn3 = document.createElement("button");
btn3.innerHTML = "hind img";
document.body.append(btn3);

const img =document.querySelector("img");

btn3.addEventListener("click", function (e) {
    img.style.display="none";

});
const image ="https://i1.sndcdn.com/avatars-bDMse0LK9giPTsoy-YozWGA-t500x500.jpg"
const btn4 = document.createElement("button");
btn4.innerHTML = "Alternate img";
document.body.append(btn4);

btn4.addEventListener("click", function (e) {
if(image!==img.src){
   img.src= image;
}
else{
    img.src="http://www.javatpoint.com/images/javascript/javascript_logo.png"
}


});


img.addEventListener("mouseover", function(){
    
         img.src="https://i1.sndcdn.com/avatars-bDMse0LK9giPTsoy-YozWGA-t500x500.jpg";


});

img.addEventListener("mouseout", function(){
   
         img.src="http://www.javatpoint.com/images/javascript/javascript_logo.png";


});


img.addEventListener("contextmenu",function(){
    alert("right clicks ");

});

 

// ارجعي لها 
form.addEventListener("click",function(){
    alert(document.getElementById("name") );
});


window.addEventListener("load", function(){

    alert('load');

});

p.addEventListener("mouseover", function(){

   p.style.backgroundColor="pink";
});

p.addEventListener("mouseout", function(){
 p.style.backgroundColor="transparent";
   
});