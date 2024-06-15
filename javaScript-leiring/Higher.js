// Higher Order Functions
// Map Return A New Array


let myNums = [1,2,3,4,5,6];

let newArray = [];

for (let i = 0; i < myNums.length; i++ ){
    newArray.push(myNums[i] + myNums[i])
}

console.log(newArray);

//let addSelf = myNums.map(function(element,index,arr){
    //console.log(`Current Element => ${element}`)
    //console.log(`Current Index => ${index}`)
    //console.log(` Array => ${arr}`)
    //console.log(` This => ${this}`)

  // return element + element;
//},10);

let addSelf = myNums.map((e) => e + e);

console.log(addSelf); // [2, 4, 6, 8, 10, 12]


function addition(ele){
    return ele + ele
}
let add = myNums.map(addition); 
console.log(addSelf); // [2, 4, 6, 8, 10, 12]

//////////////////////////////////////

// Map Swap Cases

let swappingCases = "JavaScript";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Script123cl4m";  //ignoreBooleans

let sw = swappingCases
.split("")  // .split Convert to an array
.map(function (a) {    
    //Conditin ? True : false
    return a === a.toUpperCase() ?  a.toLowerCase() : a.toUpperCase() ;
}).join(""); // return string

console.log(sw); // toUpperCase

let inv = invertedNumbers.map(function(ele){
    return -ele
});

console.log(inv); // [-1, 10, 20, -15, -100, 30]  

let ign = ignoreNumbers.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "" ;
}).join("");

console.log(ign); // Scriptclm

///////////////////////////////////////////////
//Test Map vs Filter

// let addMap = numbers.map(function (el){
//     return el + el;
// });
// 
// console.log(addMap);
// 
// let addFilter = numbers.map(function (el){
//     return el + el;
// });
// 
// console.log(addFilter);

// Filter

let friends = ["Ahmed","Sam","Sayed","Asmaa","Amgad","Ismeel"];


let filterdFriends = friends.filter(function (el) {
    return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);    // ['Ahmed', 'Asmaa', 'Amgad']

let numbers = [11,20,2,5,17,10];

let evenNumbers = numbers.filter(function (el) {
   return el % 2 === 0 ? true : false;   //  even numbers
})
console.log(evenNumbers); // [20, 2, 10]

////////////////////////////////////////////////////////////////
// Filter
// Filter Words Mord Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let  smallWords = sentence.split("").filter(function (ele) {
    return ele.length <= 4
}).join(" ");
console.log(smallWords);
// I   L o v e   F o o o d   C o d e   T o o   P l a y i n g   M u c h

let ignoreNumber = "Foood5866Code";
let ig = ignoreNumber.split("").filter(function(ele){ // filter return text , map string return true and number return false
    return isNaN(parseInt(ele));   
}).join("");
console.log(ig); //FooodCode

// Filter Strings + Multiply
let mix = "A13BS2ZX"
let mixedContent = mix.split("").filter(function (ele){
    return !isNaN(parseInt(ele))
}).map(function (ele){
    return ele * ele ;  //"A13BS2ZX" 1, 3 ,2 = 1 , 9 , 4 
})
.join("");

console.log(mixedContent); // 194

/////////////////////////////////////////

// Reduce

let nums = [10,20,15,30];
let adds = nums.reduce(function(acc,current,index,arr){
    console.log(`Acc => ${acc}`); // 5+10
    console.log(`Current Element Index => ${current}`);  //35
    console.log(`Current Element Index => ${index}`); //50
    console.log(`Array => ${arr}`); //30
    console.log(acc + current); // = 80

    return acc + current 
}, 5) // start at 5 >> [10,20,15,30]
console.log(adds); // Array = 80

/////////////////////////////////

// Reduce 
// Longest Word 
// Remove Characters + Use Reduce

let theBiggest = ["Bla","Propaganda","other","AAA","Battery","Test"];

let check = theBiggest.reduce(function(acc,current){
    console.log(`Acc => ${acc}`); 
    console.log(`Current Element Index => ${current}`);  
    console.log( acc.length > current.length ? acc : current);
    console.log('-----------------') 

    return acc.length > current.length ? acc : current; 
}) 
console.log(check); // Propaganda

let removeChars = ["E","@","@","L","Z","@","@","E","R","@","O"];

let finelString = removeChars.filter(function(ele){
    return !ele.startsWith("@");
})
.reduce(function(acc, current){
    return `${acc}${current}`
})
console.log(finelString); // ELZERO

////////////////////////////////////////

// forEach

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");


allLis.forEach(function(ele){
   ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function(ele){
        ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active")
    // Hide All Divs
    allDivs.forEach(function (ele){
        ele.style.display = 'none';
    });
   };
});

///////////////////////////////////////