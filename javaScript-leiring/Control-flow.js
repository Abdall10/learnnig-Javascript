// Control flow ( if , else if , else)
let theName = "Amai";
let theGender = "F" ;
let theAge = 30;


if (theGender === "M") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

theGender === "M" ? console.log("Mr") : console.log("Mrs")

let result = theGender === "M" ? "Mr" : "Mrs";
document.write(result)

console.log(theGender === "M" ? "Mr" :"Mrs")
console.log(`Hello ${theGender === "M" ? "Mr" :"Mrs" } ${theName}`);


theAge < 20
 ? console.log(20) 
 : theAge  > 20 && theAge < 60 
 ? console.log("20 To 60" )
 : theAge > 60
 ? console.log("Larger Than 60")
 :  console.log("Unknow")

 // logical or ||
console.log(Boolean(null)) //false
console.log(Boolean(-10 )) //true
console.log(Boolean(" ")) //true

let price = 0;

console.log(`The Price Is ${price || 200}`) // 200
console.log(`The Price Is ${price ?? 200}`) // 0 (falsey value)

// Switch Statement 
let day = 0;

switch (day ) {
    case 0:
    console.log("Saturday");
    break;
    case 1:
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break;
    default:
        console.log("Unknown Day");
}

// Arrays

let myFriends = ["Ahmed","Ali","Mohamed",["Mhamoed","Yossef"]];

console.log(`Hello ${myFriends[0]}`);  // Hello Ahmed
console.log(`Hello ${myFriends[1]}`); //  Hello Ali
console.log(`${myFriends[2][2]}`);  //h
console.log(`${myFriends[3][1][5]}`);  //f

console.log(myFriends);
myFriends[1] = "Gamal";    // ['Ahmed', 'Gamal', 'Mohamed', Array(2)]
console.log(myFriends);
myFriends[3] = ["Sami" , "Sammer"];  // ['Ahmed', 'Gamal', 'Mohamed', ['Sami', 'Sammer']]
console.log(myFriends);

console.log(Array.isArray(myFriends));  //true

// Arrays Methods , Length

let myFriends = ["Ahmed","Mohamed","Sayed","Alaa"];


console.log(myFriends.length);  // length = 4

myFriends[myFriends.length - 1 ] = "Gamal";  // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']
myFriends.length = 3; // ['Ahmed', 'Mohamed', 'Sayed']
console.log(myFriends);  // Length to 1 > index

// Arrays Methods , Length

let MyFriends = ["Ahmed","Mohamed","Sayed","Alaa"];

console.log(MyFriends);  // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa']

MyFriends.unshift("Osama", "Nabil")

console.log(MyFriends);  //  (6) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa']

MyFriends.push("Sma", "Eman")

console.log(MyFriends);  // ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sma', 'Eman']

let first = MyFriends.shift();

console.log(MyFriends);     // ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sma', 'Eman']
console.log(`First Name is ${first}`);  // First Name is Osama

let last = MyFriends.pop(); // (6) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sma']

console.log(MyFriends); 
console.log(`Last Name is ${last}`)  // Last Name is Eman

// Arrays Methods , [Search]

let myIndex = ['Ahmed', 'Mohamed', 'Sayed', 'Alaa','Ahmed']
console.log(myIndex);
console.log(myIndex.indexOf("Ahmed")); //1
console.log(myIndex.indexOf("Ahmed",2));  // 4

console.log(myIndex.lastIndexOf("Ahmed")); // 4 

console.log(myIndex.includes("Ahmed"));  //true

if(myIndex.indexOf("Osama") === -1 || myIndex.lastIndexOf("Osama") === -1){
    console.log("Not Found");
}  
// Arrays Mathods [Sort] , [Opt]

let arraySort = [10, "Sayed", "Mohamed", "90",1000,100,20,"10",-20, -10]

console.log(arraySort);

console.log(arraySort.sort()); //[-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']

console.log(arraySort.reverse()); //['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
console.log(arraySort.sort().reverse()); //['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]

// Arrays Mathods [Slicing]
// slice return a new array
let arraySlicing = ["Ahmed", "Sayed", "Ali", "Osama","Gamal","Ameer"]

console.log(arraySlicing.slice(1)); // ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(arraySlicing.slice(1,3)); //   ['Sayed', 'Ali']
console.log(arraySlicing.slice(-3)); //['Osama', 'Gamal', 'Ameer']
console.log(arraySlicing.slice(1,-2)); // ['Sayed', 'Ali', 'Osama']
console.log(arraySlicing.slice(-4,-2)); //(2) ['Ali', 'Osama']

arraySlicing.splice(0,0,"Sameer", "Aymen");
console.log(arraySlicing);  // ['Sameer', 'Aymen', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

arraySlicing.splice(1,2,"Sameer", "Aymen");
console.log(arraySlicing); //['Sameer', 'Sameer', 'Aymen', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

// Arrays Mathods [Joining]

let myFriendsArray = ["Ahmed", "Sayed", "Ali", "Osama","Gamal","Ameer"];
let myNewFriends= ["Samar","Sma"];
let schoolFriends= ["Haytham","Shady"];

let allFriends = myFriendsArray.concat(myNewFriends,schoolFriends, "Gameel" )

console.log(allFriends);
//(11) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sma', 'Haytham', 'Shady', 'Gameel']

console.log(allFriends.join());
//Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sma,Haytham,Shady,Gameel

console.log(allFriends.join(""));
//AhmedSayedAliOsamaGamalAmeerSamarSmaHaythamShadyGameel

console.log(allFriends.join(" | "));
// Ahmed | Sayed | Ali | Osama | Gamal | Ameer | Samar | Sma | Haytham | Shady | Gameel

console.log(allFriends.join(" | ").toLocaleUpperCase());
//AHMED | SAYED | ALI | OSAMA | GAMAL | AMEER | SAMAR | SMA | HAYTHAM | SHADY | GAMEEL








