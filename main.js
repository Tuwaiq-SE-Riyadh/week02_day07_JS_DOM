
const body = document.querySelector("body");

const buttonSize = document.createElement("button");
buttonSize.innerText = "change heading size";
body.append(buttonSize);


const headingH1 = body.querySelector("h1");

buttonSize.addEventListener("click", function(){

    

    headingH1.style.fontSize = "15px" ;

    
});


const buttonStyle = document.createElement("button");
buttonStyle.innerText = "change paragraph style";
body.append(buttonStyle);


const paragraph = body.querySelector("p");

buttonStyle.addEventListener("click", function(){

    paragraph.style.fontStyle = "oblique" ;

    
});




const buttonHighlight = document.createElement("button");
buttonHighlight.innerText = "Highlight paragraph";
body.append(buttonHighlight);


buttonHighlight.addEventListener("click", function(){

    paragraph.style.backgroundColor = "red" ;

    
});





const buttonHide = document.createElement("button");
buttonHide.innerText = "Hide image";
body.append(buttonHide);

const image = body.querySelector("img");

buttonHide.addEventListener("click", function(){

    image.style.display = 'none';

    
});


const imageSrc ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png";

const buttonAlter = document.createElement("button");
buttonAlter.innerText = "Alternate image";
body.append(buttonAlter);
buttonAlter.addEventListener("click", function(){

    if (image.src !== imageSrc){
        image.src = imageSrc;

    }
else {
    image.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png";
}

    
});



image.addEventListener("mouseover", function(){

    
    if (image.src !== imageSrc){
        image.src = imageSrc;

    }
else {
    image.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png";
}
   
});

image.addEventListener("mouseout", function(){

    
    if (image.src !== imageSrc){
        image.src = imageSrc;

    }
else {
    image.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png";
}
   
});




image.addEventListener("contextmenu", function(){

    alert('You right-click the image');
  
});




const addInputName = body.querySelector("input#name");

addInputName.addEventListener("input" ,function(){

    alert('You enter a name');
});


const addInputCourse = body.querySelector("input#course");

addInputCourse.addEventListener("input" ,function(){

    alert('You enter a course');
});


window.addEventListener("load" ,function(){

    alert('the page loaded');
});






paragraph.addEventListener("mouseover", function(){

    paragraph.style.backgroundColor = "blue";
   
});

paragraph.addEventListener("mouseout", function(){

    paragraph.style.backgroundColor = "white";
    
   
});
