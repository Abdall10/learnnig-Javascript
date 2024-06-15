// Dom

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement);
console.log(myQueryElement);
console.log(myQueryAllElement);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/////////////////////////////////////

// Dom
//getAttribute

let mtElement = document.querySelector(".js")

console.log(mtElement.innerHTML);
console.log(mtElement.textContent);

mtElement.innerHTML = "Text From <span>Main.js</span> File";
mtElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.getAttribute("href", "https://twitter.com");
myLink.getAttribute("title", "Twitter");

////////////////////////////////////////////////

// Dom [Check Attributes]
/*console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttributes("data-src")){
    console.log("Found");
}else{
    console.log("Not Found");
}

if (myP.hasAttributes("data-src")){
    myP.removeAttribute("data-src");
}else{
    console.log("Not Found");
}
*/
////////////////////////////////////////////

// Dom [Check Attributes]

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];


if (myP.hasAttributes("data-src")){
    if(myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src")
    }else{
        myP.setAttribute("data-src", "New Value")
    }
}else{
    console.log("Not Found");
}

if (myP.hasAttributes()){
    console.log(`Has Attributes`);
}
if (document.getElementsByTagName("div")[0].hasAttributes()){
    console.log(`Has Attributes`);
}else{
    console.log(`Div Has No Attributes`);
}

///////////////////////////////////////////////

//DOM [Create Elements]

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is Div")

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-custom", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);
document.body.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To body
document.body.appendChild(myText);

/////////////////////////////////////////////////////

//DOM [Create Elements]

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add ParagraphText
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className =`product`

document.body.appendChild(myMainElement);

//////////////////////////////////////////////////

// Dom [Deal With Childrens]

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);    // Number of Elements
console.log(myElement.children[0]);    // Elements 0
console.log(myElement.childNodes);  // NodeList(7) [text, p, text, span, text, comment, text]
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

/////////////////////////////////////////////////

// Dom Events
// onclick
// oncontextmenu
// onmouseenter
// onmouseleave

/*
---onload
---onscroll
---onresize

---onfocus
---onblur
---onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log('Clicked');
}
window.onscroll = function () {
    console.log('Scroll');  // height body
}

/////////////////////////////////////////////////

// Dom [Events]
// --Validate Form Practice

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");



document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if(userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }
    if (ageInput.value !== "" && ageInput.value.length >= 8){
        ageValid = true ;
    }
    if(userValid === false || ageValid === false) {
       e.preventDefault();
    }
}
document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
}
`
<form>
            <input type="text" name="username" placeholder="Max 10 Chars Only" />
            <input type="text" name="age" placeholder="Cant Be Empty"/> 
            <input type="submit" value="Submit Data" />
        </form>
        <a href="https://google.com">Google</a>
`

/////////////////////////////////////////////////////////////////////

// Dom [Events Simulation]
// click , focus ,blur

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
    two.focus();
};

one.onblur = function () {
    document.links[0].click();
}

//////////////////////////////////////////

// Dom [class List]
// length , contains(true,false) ,item(index) ,add ,remove ,toggle(add,remove)

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("show")); // true
console.log(element.classList.contains("div"));  // false
console.log(element.classList.item("3")); //class="one two show test" => test 


element.onclick = function () {
    element.classList.add("add-one","add-two"); //class="one two show test add-one add-two"
}

element.onclick = function () {
    element.classList.remove("one","two"); //class="show test"
}

element.onclick = function () {
    element.classList.toggle("page"); //class="one two show test page"
}

////////////////////////////////////////////////////

// Dom [CSS]
// - style
// - cssText

let elements = document.getElementById("my-div")

elements.style.color = "red";
elements.style.fontWeight = "bold";

elements.style.cssText ="font-weight: bold; color: green; opacity: 0.9";

elements.style.removeProperty("color");
elements.style.setProperty("font-size","40px","important");

document.styleSheets[0].rules[0].style.removeProperty(line-height);
document.styleSheets[0].rules[0].style.setProperty("background-color", "red");

//////////////////////////////////////////////////////

// Dom [Deal With Elements]
// - before  [Element || String]
// - aftee   [Element || String]
// - append  [Element || String]
// - prepend [Element || String]
// - remove


let elem = document.getElementById("my-div");
let createdP = document.createElement("p");
// before , aftee  [String] 
elem.before("Hello From Js")
elem.after("Hello From Js")

// before , aftee  [Element] 
elem.before(createdP);
elem.after(createdP);

// append, prepend
elem.append("Hello from Js");  // last
elem.prepend("Hello from Js"); // first

//remove
elem.remove(); // remove the element itself

///////////////////////////////////////////////////////

// Dom [Traversing]

let span = document.querySelector(".two");

console.log(span.nextElementSibling);
console.log(span.previousElementSibling);
console.log(span.parentElement);

span.onclick = function (){
    span.parentElement.style.opacity = '0';
}

/////////////////////////////////////////////////////

// Dom [Cloning]

let myPa = document.querySelector("p").cloneNode(true);
let myDiv =  document.querySelector("div");

myPa.id = `${myPa.id}-clone`;

myDiv.appendChild(myPa);

/////////////////////////////////////////

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

///////////////////////////////////////////


