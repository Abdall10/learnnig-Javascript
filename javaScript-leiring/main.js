// Dom [Add Event Listener]

let myPr = document.querySelector("p");

myPr.onclick = one;
myPr.onclick = two;

function one() {
    console.log("Message From OnClick 1");
}

function two() {
    console.log("Message From OnClick 2");
}

window.onload = "Js";

myPr.addEventListener("click", function () {
    console.log("Message From OnClick 1 Event");
})
myPr.addEventListener("click", one);
myPr.addEventListener("two", two);

// myPr.addEventListener("click","String") //Errors

myPr.onclick = function () {
    let newPr = myPr.cloneNode(true);
    newPr.className ='clone'
    document.body.appendChild(newPr);
}


document.addEventListener("click", function (e){
    if(e.target.className === 'clone'){
        console.log("Cloned");
    }
});
