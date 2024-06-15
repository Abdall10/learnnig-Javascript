// Object 

let user ={
    // Properties 
    theName: "Ahmed",
    theAge: 30,
    // Methods
    sayHello: function () {
       return 'Hello';
    },
};

console.log(`The name is : ${user.theName}`);
console.log(`The Age is : ${user.theAge}`);
console.log(user.sayHello());

////////////////////////////////////////////////

// -Dig Deeper

let myVar = "country";

let users ={
    thename: "Ahmed",
    country: "Egypt",
 };
 
 console.log(`The name is : ${users.thename}`); //Ahmed
 console.log(users["thename"]); //Ahmed
 console.log(`Your country is : ${users[myVar]}`); //Egypt
 console.log(users.myVar);  //undefined

 ///////////////////////////////////////////////

 // Object 
// -Dig Deeper

let available = true;

let uses ={
    thename: "Ahmed",
    age: 30,
    skills: ["Html","CSS","JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        Egypt: {
            one:"Cairo",
            two:"Giza",
        },
    },
    checkAv: function () {
        if(uses.available === true){
            return `Free For Work`;
        }else{
            return `Not Free`;
        }
    }
 };
 
 console.log(uses.thename);
 console.log(uses.age);  
 console.log(uses.skills.join(" , ")); 
 console.log(uses.skills[2]); //js
 console.log(uses.addresses.ksa); 
 console.log(uses.addresses.Egypt.one); 
 console.log(uses["addresses"].Egypt.one); 
 console.log(uses["addresses"]["Egypt"]); 
 console.log(uses["addresses"]["Egypt"]["one"]); 

 console.log(uses.checkAv()); 

 ///////////////////////////////////////////////////////////

 // Object 
//  Create With New Keyword new  Object();

let us =new Object({
    age:20,
});
console.log(us);

us.age = 38;
us["country"] = "Egypt";

us.sayHello = function(){
    return `Hello`;
}
console.log(us);
console.log(us.age);
console.log(us.country);
console.log(us.sayHello());

///////////////////////////////////////////////////////////////////////

// Function this Keyword new  

console.log(this);
console.log(this === window);

myVar =100;

console.log(window.myVar); // 100
console.log(this.myVar);  // 100

function sayHello(){
    console.log(this);
     return this; 
}
sayHello();
console.log(sayHello() === window); // true 

document.getElementById("cl").onclick = function () {  // cl ID The Button
    console.log(this); 
}
let used = {
    age: 38,
    ageeInDays: function () {
        return this.age * 365;
    },
};
console.log(used.age);
console.log(`${used.ageeInDays()} day`);

//////////////////////////////////////////

//  Create Object With create Method
let ur = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};
console.log(ur);
console.log(ur.age);
console.log(ur.doubleAge());  //40

let obj = Object.create({});

obj.a =100;

console.log(obj);

let copyobj = Object.create(ur);

copyobj.age = 50

console.log(copyobj);
console.log(copyobj.age);
console.log(copyobj.doubleAge());  // 100

///////////////////////////////////////////

//  Create Object With assign Method

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

let tragetobject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(tragetobject, obj1, obj2)

finalObject.prop1 = 200;
finalObject.prop4 = 200;

console.log(finalObject);

let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6})

console.log(newObject);

///////////////////////////////////////////////////////