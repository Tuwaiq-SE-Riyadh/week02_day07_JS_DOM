const sub1 = document.querySelector('#submit1')
const sub2 = document.querySelector('#submit2')
const sub3 = document.querySelector('#submit3')
const sub4 = document.querySelector('#submit4')
const sub5 = document.querySelector('#submit5')
const img = document.querySelector('img');
const h1 = document.querySelector('#heading');
const p = document.querySelector('#paragraph');
let paragraphs = document.querySelector('#paragraph');



sub1.addEventListener("click", Change1 )
sub2.addEventListener("click", Change2 )
sub3.addEventListener("click", Change3 )
sub4.addEventListener("click", Change4 )
sub5.addEventListener("click", Change5 )

function Change1(e){

    e.preventDefault()
    h1.style.fontSize = '60px';    
}


function Change2(e){

    e.preventDefault()
    p.style.fontFamily = "Impact,Charcoal,sans-serif";  
}


function Change3(e){

    e.preventDefault()
    p.style.backgroundColor = "yellow" ;   
}


function Change4(e){

    e.preventDefault()
    img.style.display = "none";   
}


function Change5(e){

    const img = document.querySelector('img');

    if(img.src == "https://www.qries.com/images/banner_logo.png"){
        e.preventDefault()
        console.log(img.src);
        img.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png"
    }
    else{
        e.preventDefault()
        img.src = "https://www.qries.com/images/banner_logo.png"
        img.style.width = "300px"
        img.style.height ="300px"
       
    }
}


img.addEventListener("mouseover", mouseOver);
img.addEventListener("mouseout", mouseOut);

function mouseOver() {
   
    const img = document.querySelector('img');

    img.src = "../image/tuwaiq.jpg"
    img.style.width = "300px"
    img.style.height ="300px"
}


function mouseOut() {
   
    const img = document.querySelector('img');
    
    img.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png"
}



img.onclick = function() {
    alert('you clicked it');
  };


  window.onload = function(){ 
    alert("Hi there");
    }


  
paragraphs.addEventListener('mouseenter', e => {
   
  paragraphs.style.color = 'lightgreen';
});

paragraphs.addEventListener('mouseleave', e => {
    
  paragraphs.style.color = 'black';
});



let text = document.querySelector("form");
text.addEventListener('keyup', function() {
 
    alert(' conteneu');
});