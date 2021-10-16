function changeSize(){
    document.getElementById("heading").style.fontSize="100px";
 
 }

 function highlight() {
    document.getElementById("paragraph").style.backgroundcolor="red";
 }

 function highlight2() {
   document.getElementById("paragraph").style.backgroundcolor="white"
}
 
  function fontStyle()
  {
    document.getElementById("paragraph").style.fontStyle="italic";

    document.getElementById("paragraph").style.backgroundcolor="yellow";
  }
     

  function mouseov(){
    document.getElementById("hide").src="https://cutt.ly/UE4Ps9Z";

}
function onmouseou(){
    document.getElementById("hide").src="https://cutt.ly/UE4Ps9Z";

}
     function hide() {
        document.getElementById("hide").style.visibility="hidden";
        
     }
 
     function alternate() {
        document.getElementById("hide").src= "https://cutt.ly/UE4Ps9Z"
        //  const  alternate= document.querySelector("img")
        //  alternate.style.src= "https://cutt.ly/UE4Ps9Z"
         
     }
     //Change an image when the mouse moves onto it, and then back to the original image when the mouse moves

    
     document.getElementById("hide").addEventListener("contextmenu",function(event){event.preventDefault();
         alert("right clics");

     });

     //alert on the page when a user enters data into a form.
     document.getElementById("form").addEventListener("keyup",function() {alert("Alert");})


   

    
     window.addEventListener("load",function()
     {
         alert("Alert");})
     
     

    //  //alert to let the user know when the page has loaded.
    //  window.addEventListener("load",function(){
    //  alert("load");
    // });

    // //Highlight all paragraphs when the mouse moves over them 
    // p.addEventListener("mouseover",function(){
    //     p.style.backgroundcolor="pink";
    // });

    
    // p.addEventListener("mouseout",function(){
    //     p.style.backgroundcolor="transparent"
    // });