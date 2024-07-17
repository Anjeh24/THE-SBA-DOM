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

let enterInput = window.document.getElementById('listItems')//BOM
let addSpan = document.getElementById('addpsan');
let listedItems = document.getElementById('itemsHolder');
let innermstDiv = document.getElementById('spandiv')


enterInput.addEventListener('mouseover', function (){
    enterInput.style.backgroundColor = "#FFFDE7 ";
});
// enterInput.addEventListener('onmouseover', function(){
//     target.style.backgroundColor = "#FFFDE7 ";
    
// })
enterInput.addEventListener('mouseout', function(){
   enterInput.style.backgroundColor = "white ";
    
});


addSpan.addEventListener('click', function(){

if (enterInput.value == ''){
    alert("Enter an item to add to list please!");
}else {

    let lists = document.createElement('li');
    lists.innerText = enterInput.value;
    listedItems.appendChild(lists);
    enterInput.value = "";
   
    //creating and appending delete button
    let deleteSpan = document.createElement('span');
    const xBtn = document.createTextNode = "\u00D7";
    console.log(xBtn);
    deleteSpan.className = "deleet";
    deleteSpan.textContent = " " + xBtn;
    lists.appendChild(deleteSpan);

//loop to change background color of list element if index is even
    for (let i = 0; i < lists.length; i++){
        if (lists[i] % 2 == 0){
            lists[i].style.backgroundColor = "grey";
        }
    }
    
      }
    })
   


     
 







// const img1 = document.createElement('img');
// img1.src = './images/pexels-adonyi-foto-1414651.jpg';
// //outerDiv.appendChild('img1');
// let targetDiv = bodii.children[0].children[1].appendChild('img1')
// //document.querySelector('#main-div').appendChild('img1');
// //outerDiv.style.backgrpundImage = "url('pexels-adonyi-foto-1414651.jpg')"



