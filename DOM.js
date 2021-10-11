// - Create `buttons` to do the following: 
//   - Change the size of a heading
//   - Change the font style of a paragraph
//   - Highlight a paragraph
//   - Hide an Image
//   - Alternate between two images

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const image = document.querySelector('img');
image.style.width = "300px"
image.style.height = "300px"
const body = document.querySelector('body');

const div = document.createElement('div')

const sizeOfH = document.createElement('button')
ButtonStyle(sizeOfH,"Change size")
const fontStyle = document.createElement('button')
ButtonStyle(fontStyle,"Change font")
const highlight = document.createElement('button')
ButtonStyle(highlight,"Highlight")
const hide = document.createElement('button')
ButtonStyle(hide,"Hide the image")
const alternate = document.createElement('button')
ButtonStyle(alternate,"Change the image")

function ButtonStyle(button, name) {
    button.innerText = name
    button.style.width = "100px"
    button.style.height = "40px"
}

sizeOfH.addEventListener("click", function (e) {
    console.log('button clicked')
    h1.style.fontSize="30px";
});
fontStyle.addEventListener("click", function (e) {
    console.log('button clicked')
    p.style.fontFamily = "Arial";

});
highlight.addEventListener("click", function (e) {
    console.log('button clicked')
    p.style.backgroundColor = "yellow";
});
hide.addEventListener("click", function (e) {
    image.style.display="none";

});
alternate.addEventListener("click", function (e) {
    image.style.display="block";
    image.src ="https://static.javatpoint.com/htmlpages/images/html-tutorial.png"
});
body.append(div)
div.append(sizeOfH);
div.append(fontStyle);
div.append(highlight);
div.append(hide);
div.append(alternate);


//Change an image when the mouse moves onto it, and then back to the original image when the mouse moves off of it.

image.addEventListener("mouseenter", function (e) {
    console.log('mouse enter')
    image.src = 'https://static.javatpoint.com/htmlpages/images/html-tutorial.png';
    });

image.addEventListener("mouseout", function (e) {
    console.log('mouse out')
    image.src = 'http://www.javatpoint.com/images/javascript/javascript_logo.png';
    });


// - Create a script which creates an alert on the page when a user right clicks on a speciﬁc image

image.addEventListener("mousedown", function (e) {
    console.log('Right mouse button clicked on image')
    alert('Right mouse button clicked on image')
});

//- Create an alert on the page when a user enters data into a form.

const name = document.querySelector('#name');
const course = document.querySelector('#course');
if (name != '' && course != '') {
    alert("All type has done.");
}


// - Create an alert to let the user know when the page has loaded.

window.addEventListener("load", function (e) {
    console.log("The page has loaded");
    alert('The page has loaded')
});

// - Highlight all paragraphs when the mouse moves over them (then revert back once it has moved past them).


p.addEventListener("mouseenter", function (e) {
    console.log('mouse enter paragraph')

    p.style.backgroundColor = "yellow";
    });

p.addEventListener("mouseout", function (e) {
    console.log('mouse out paragraph')
    p.style.backgroundColor = "white";
    });