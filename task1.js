// Change the size of a heading
function changeSizeOfHeading()
{
    const changethecolor = document.querySelector('h1')
    changethecolor.style.fontSize="50px"
}

// Change the font style of a paragraph
function changeFontOfparagraph()
{
    const changeFont = document.querySelector('p')
    changeFont.style.fontFamily="Arial, Helvetica, sans-serif"
}

// Highlight a paragraph
function highlightParagraph()
{
    const highlight = document.querySelector('p')
    highlight.style.backgroundColor="yellow"
}

// Hide an Image
function hideAnImage()
{
    
    const hideImage = document.querySelector('img')
    if(hideImage.style.visibility==="hidden")
    {
        hideImage.style.visibility="visible"
    }
    else{
        hideImage.style.visibility="hidden"
    }
}

// Alternate between two images
// every click ,, the image well change

// if(alternateImages.getAttribute("src") === "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")

function alternateBetweenTwoImages()
{   
    const alternateImages = document.querySelector('img')
        if(alternateImages.src === "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")
        {
            alternateImages.src="http://www.javatpoint.com/images/javascript/javascript_logo.png"
            alternateImages.style.width="300px"
            alternateImages.style.height="300px"
        }
        else{
            alternateImages.src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            alternateImages.style.width="300px"
            alternateImages.style.height="300px"
        }
    
}


// Change an image when the mouse moves onto it, and then back to the original image when the mouse moves off of it.
    const mouseOnImage = document.querySelector('img')   // mouse moves onto it
    mouseOnImage.addEventListener("mouseover",changeImage)

    const mouseOnImage2 = document.querySelector('img')  // mouse moves off 
    mouseOnImage2.addEventListener("mouseout",backTheImage)

function changeImage()
{

    const changeImage = document.querySelector('img')
    changeImage.src="https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cml5YWRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    changeImage.style.width="300px"
    changeImage.style.height="300px"
}

function backTheImage()
{
    const backTheImage = document.querySelector('img')
    backTheImage.src="http://www.javatpoint.com/images/javascript/javascript_logo.png"
}


// Create a script which creates an alert on the page when a user right clicks on a speciﬁc image
function rightClicks(){
    alert("Hi, this is alert!")
}

// Create an alert to let the user know when the page has loaded.
function onloadFunction()
{
    alert("Hi, The Page is loaded");
}

// Create an alert on the page when a user enters data into a form.


function pressedOnInputs() {
alert("You pressed a key inside the input field");
}


// Highlight all paragraphs when the mouse moves over them (then revert back once it has moved past them).
const paragraphsMouseover = document.querySelector('p')   // mouse moves onto it
paragraphsMouseover.addEventListener("mouseover",changeHighlight)

const paragraphsMouseout = document.querySelector('p')  // mouse moves off 
paragraphsMouseout.addEventListener("mouseout",backHighlight)

function changeHighlight()
{
    const paragraphsMouseover1 = document.querySelector('p')
    paragraphsMouseover1.style.backgroundColor="yellow"
}

function backHighlight()
{
    const paragraphsMouseout1 = document.querySelector('p')
    paragraphsMouseout1.style.backgroundColor=""
}