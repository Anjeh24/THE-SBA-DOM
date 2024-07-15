let bodii = document.getElementById('bodi'); //id
bodii.style.backgroundColor = "#FDFD96";

const header1 = document.createElement('h1'); //createElement
bodii.prepend(header1);                     //appendChild but chose prepend to attach it as first child
header1.textContent = "GROCERY PAL";
header1.style.textAlign = "center";

let outerDiv = document.querySelector('#main-div'); //queryselector
outerDiv.style.borderStyle = "solid";

header1.parentNode.style.margin = "20px"; //styling the margin of the body element since it is the parent to header1/parentNode

window.document.getElementById('inner-div').borderStyle = 'solid'; //BOM

const newNode = header1;
const headClone = newNode.cloneNode(false); //To leave the clone empty with no text in it
document.getElementById('main-div').prepend(headClone); //Attaching h1 tag clone to top of main div.
headClone.innerText = "My Grocery List";
headClone.style.backgroundColor = "#77DD77";

let enterInput = document.getElementById('listItems')
let addSpan = document.getElementById('addpsan');
let listedItems = document.getElementById('itemsHolder');
let deletebtn = document.createElement('span');

addSpan.addEventListener('click', function(){
if (enterInput.value == ''){
    alert("Enter an item to add to list please!");
}else {

    let lists = document.createElement('li');
    lists.innerText = enterInput.value;
    listedItems.appendChild(lists);
   
    enterInput.value = "";
  }
})

//    for (let i = 0; i < lists.length; i++){
//     if (lists[i].innerText != " "){
//         deletebtn.value = "U+00D7";
//        lists[i].appendChild('deletebtn');
       
//     }
//    }
//     //lists.addEventListener()
// })







// const img1 = document.createElement('img');
// img1.src = './images/pexels-adonyi-foto-1414651.jpg';
// //outerDiv.appendChild('img1');
// let targetDiv = bodii.children[0].children[1].appendChild('img1')
// //document.querySelector('#main-div').appendChild('img1');
// //outerDiv.style.backgrpundImage = "url('pexels-adonyi-foto-1414651.jpg')"



