//Math
console.log(Math.round(99.22))
console.log(Math.round(99.55))

console.log(Math.ceil(99.2))
console.log(Math.floor(99.9))

console.log(Math.min(10,20,100,-100,90));
console.log(Math.max(10,20,100,-100,90));

console.log(Math.pow(2,8));

console.log(Math.random());

console.log(Math.trunc(99.5));

//array
console.log(theName[0]);
console.log(theName[5]);

console.log(theName.charAt(0));
console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toLowerCase);

// indexOf

let a = "Hello in my Post";
console.log(a.indexOf("my"))  //9
console.log(a.indexOf("my",10))   //-1
console.log(a.indexOf("t")) //15

//slice
console.log(a.slice(2,6)); //llo 
console.log(a.slice(-5, -3));  //p

console.log(a.repeat(5))  //a 5 repeat

console.log(a.split(""));  //as array  ['H', 'e', 'l', 'l', 'o', ' ', 'i', 'n', ' ', 'm', 'y', ' ', 'P', 'o', 's', 't']
console.log(a.split(" ")); //as array ['Hello', 'in', 'my', 'Post'] 
console.log(a.split(" ",2)); //as array ['Hello', 'in']

//substring

let b = "Elzero Web school";
console.log(b.length) // the Number is the b : 17

console.log(b.substring(2,6));  //zero

console.log(b.substring(6,2));  //zero 

console.log(b.substring(-10,6)); // 0 => 6 Elzero

console.log(b.substring(b.length -5, b.length -3));  //ch

console.log(b.substr(0));  //Elzero Web school
console.log(b.substr(17));  // nall

console.log(b.substr(-5,2)); //ch
console.log(b.substr(-6,2)); //sc


console.log(b.includes("Web")); //if b has "Web" = true
console.log(b.includes("school",8)); //if b has "school" after index 8 = true

console.log(b.startsWith("E")); //if b has string start with  "E" = true
console.log(b.startsWith("E",2)); //if b has string number2 start with  "E" = false

console.log(b.endsWith("o")); //if b has  string  end with  "o" = false
console.log(b.endsWith("o",6)); //if b has  string  end with 6  "o" = true

//comparison Operators

console.log(10 == "10"); 
console.log(10 != "10");

console.log( 10 === "10" ); // Compare value + Type = false
console.log( 10 !== "10" ); // Compare value + Type = true 

console.log( "Abdallh" === "Ahmed" );  //false
console.log(typeof "Abdallh" === typeof "Ahmed" );  // true

//logical Operators !Not &&And  ||or

console.log(!(10 == "10")) //false
console.log(!(10 != "10")) //true

console.log(!(10 == "10")) //false

console.log(10 == "10" && 10 > 8) //true

console.log(10 == "10" || 10<50 ||10 > 80) //true

// Control flow ( if , else if , else)
let price = 100;
let discount = true;
let discountAmount =30;
let country = "Egypt";

if (discount === true) {
   price -= discountAmount;
}else if (country === "Egypt" ){
    price -= discountAmount;   // price - discountAmount = 70
}else if (country === "Syria" || "Ksa"){
    price -= 50;
}
else  {
    price -= 10;
}
console.log(price);


