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