let bodii = document.getElementById('bodi'); //id
bodii.style.backgroundColor = "#FDFD96";

const header1 = document.createElement('h1'); //createElement
bodii.prepend(header1);                     //appendChild but chose prepend to attach it as first child
header1.textContent = "GROCERY PAL";
header1.style.textAlign = "center";

let outerDiv = document.querySelector('#main-div'); //queryselector
outerDiv.style.borderStyle = "solid";





// const img1 = document.createElement('img');
// img1.src = './images/pexels-adonyi-foto-1414651.jpg';
// //outerDiv.appendChild('img1');
// let targetDiv = bodii.children[0].children[1].appendChild('img1')
// //document.querySelector('#main-div').appendChild('img1');
// //outerDiv.style.backgrpundImage = "url('pexels-adonyi-foto-1414651.jpg')"



