const button1 = document.querySelector('#button1')

button1.addEventListener('click',function(){
   document.querySelector("#heading").style.fontSize='15px'
})


const button2 = document.querySelector('#button2')

button2.addEventListener('click',function(){
   document.querySelector("#paragraph").style.fontStyle = 'italic'
})

const button3 = document.querySelector('#button3')

button3.addEventListener('click',function(){
   document.querySelector("#paragraph").style.backgroundColor= "yellow"
})


const button4 = document.querySelector('#button4')

button4.addEventListener('click',function(){
    document.querySelector("#img1").hidden=true
 })

 const button5 = document.querySelector('#button5')
 const image = document.querySelector("#img1")
 button5.addEventListener('click',function(){
    image.src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg"
 })

 image.addEventListener('mouseover',function(){
    image.src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg"
    image.addEventListener('mouseleave',function(){
        image.src="http://www.javatpoint.com/images/javascript/javascript_logo.png"
    })
 })

 image.addEventListener('contextmenu',function(){
    alert('Success');
 })

 window.onload = (event) => {
    alert('page is fully loaded');
  };

const para = document.querySelector('p')
para.addEventListener('mouseover',function(){
    para.style.backgroundColor="yellow"
    para.addEventListener('mouseleave',function(){
        para.style.backgroundColor="white"
    })
})