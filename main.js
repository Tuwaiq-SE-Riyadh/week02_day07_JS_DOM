// console.log("hi")
// const buttons = document.getElementById("b1")
// console.log(document.getElementById("b2"))



function changeHead1() {
    console.log("fun1 ")
    document.getElementById('heading').style.fontSize =
        document.getElementById('heading').style.fontSize + "100px";


}

function changeP() {
    let changs = document.getElementById('paragraph')
    changs.style.fontStyle = "italic";

}


function hilightP() {
    let hp = document.getElementById('paragraph')
    hp.style.backgroundColor = "yellow";
}


function hideImg() {
    let img = document.getElementById('img');
    img.style.visibility = 'hidden';
}


function img2() {
    let img = document.getElementById('img');
    img.style.visibility = 'hidden';
}


function imgChange() {
    let url = document.getElementById('img').src
    if (url == "http://www.javatpoint.com/images/javascript/javascript_logo.png") {
        document.getElementById('img').src = "js.jpg"
    } else {
        document.getElementById('img').src = "http://www.javatpoint.com/images/javascript/javascript_logo.png"
    }
}

//Change an image when the mouse moves onto it, and then back to the original image when the mouse moves off of it.
function mouseOver() {
    console.log("img over");
    document.getElementById('img').src = "js2.jpg"
}

function mouseOut() {
    console.log("img out");
    document.getElementById('img').src = "http://www.javatpoint.com/images/javascript/javascript_logo.png"
}


//Create a script which creates an alert on the page when a user right clicks on a speciﬁc image
//document.getElementById('img').addEventListener('onmousedown', alert("you click on the img !!!"))

//Create an alert on the page when a user enters data into a form.
if (document.getElementById('name') == '' || document.getElementById('course') == '') {
    alert("you enter ")
}

//Create an alert to let the user know when the page has loaded.
window.addEventListener('onload', alert("Page is loaded"))



//Highlight all paragraphs when the mouse moves over them (then revert back once it has moved past them).


function allP() {

    document.getElementById('paragraph').style.backgroundColor = "yellow";
}

function allP2() {
    document.getElementById('paragraph').style.backgroundColor = "";
}