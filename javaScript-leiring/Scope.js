//Scope Global And Local Scope 

var a = 1;
let b =2;

function showText(){
    var a = 10;
    let b = 20;
    console.log(`Function - From local ${a}`); // a = 10
    console.log(`Function - From local ${b}`); // b = 20
}

console.log(`From Giobal ${a}`);  // a = 1 by global
console.log(`From Giobal ${b}`);  // b = 2 by global

showText();

////////////////////////////////////////////////

//Scope Block [If, Switch, For ]

var x = 10;
if (10 === 10) {
    let x = 50;
    console.log(`From If Block ${x}`); // x = 50

}
console.log(`From Giobal ${x}`); // x = 10 by global

/////////////////////////////////////
// Lexical Scope

function parent () {
    let a = 10;

    function child() {
        console.log(a)
        
        function grand () {
            let b =100
            console.log(`From Grand ${a}`);  // be parent a = 10 
        }
        grand ();
    }
    child();
}
parent ();

/////////////////////////////////////////