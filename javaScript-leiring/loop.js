// Loop For

for (let i = 0; i <10; i++)
    {
        console.log(i);
    }

// Loop On Sequences

let myFriends = [1,2,"Osama", "Ahmed", 1,27,55,"Sayed" , "Ali", "Amira"];

let onlyNames =[];


for (let i = 0; i < myFriends.length; i++) {    
    if (typeof myFriends[i] === 'string') {
        onlyNames.push(myFriends[i]);
    }
    
}
console.log(onlyNames); //['Osama', 'Ahmed', 'Sayed', 'Ali', 'Amira']

// Nested Loops 

let products = ["Keyboard", "Mouse", "Pen" , "Pad", "Monitor"];

let colors = ["Red","Green","Black"];

let models = [2020 , 2021];

let makeTo =["China","South Korea"]

for (let i =0; i < products.length; i++){
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors: ");
    for (let j = 0; j < colors.length; j++){
        console.log(`- ${colors[j]}`)
    }
    console.log("Models: ");
    for (let k = 0; k < models.length; k++){
        console.log(`- ${models[k]}`)
    }
    console.log("MakeTo: ");
    for (let v = 0; v < makeTo.length; v++){
        console.log(`- ${makeTo[v]}`)
    }
}
/////////////////////////////////////////////
// Nested Loops 

mainLoop: for (let i =0; i < products.length; i++){
    if(typeof products[i] === "number") {
        continue;
    }
   console.log (products[i]);
   console.log("Colors: ");
   nestedLoop: for (let j =0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`)
        if (colors[j] === "Green"){
            break nestedLoop;
        }
    }
}
///////////////////////////////////////////////
// Loops For Advanced Example 

let products2 = ["Keyboard", "Mouse", "Pen" , "Pad" ,"Monitor", "iPhone"];
let i =0;

 for (;;){
console.log(products2[i]);
i +=2;  //  Keyboard , Pen , Monitor
if (i === products2.length) break;
}

///////////////////////////////////////////////

// Products Practice

let products3 = ["Keyboard", "Mouse", "Pen" , "Pad" ,"Monitor", "iPhone"];
let color =["Red","Green","Blue"];

let showCount = 6;

document.write(`<h1>Show ${showCount} products3</h1>`);

for (let i = 0; i < showCount; i++ ){
    document.write(`<div></div>`);
    document.write(`<h1>[${i + 1}]  ${products3[i]}</h1>`);
    for (let j =0; j < color.length; j++){
        document.write(`<p>${color[j]}</p>`);
    }
    document.write(`<p>${color.join(" | ")}</p>`);  // between
    document.write(`</div>`);
}

////////////////////////////////
// Loop While

let products4 = ["Keyboard", "Mouse", "Pen" , "Pad" ,"Monitor", "iPhone"];
let index = 0;
while (index < products4.length) {
 console.log(products4[index]);
 index +=1;
}

/////////////////////////////////////
// Loop Do - While

let products5 = ["Keyboard", "Mouse", "Pen" , "Pad" ,"Monitor", "iPhone"];
let il = 0;
do {
  console.log(il);
  il++;
} while(false);
console.log(il);

//////////////////////////////////