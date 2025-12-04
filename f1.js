// Types for a variable -- let , var , const //
/*
const { default: createPlugin } = require("tailwindcss/plugin");

// console.log(a)
var wel="hii" // var is a global execution(undefined), stores in a stack
console.log(wel);
wel="hi"
console.log(wel);
const dept="ECE"
console.log(dept);
console.log("hello");
// append in a list :
let a=[1,2,3]
a.push(4)
console.log(a);
// To Insert a value in a beginning of list 
a.unshift(7)
console.log(a); 
// To remove a element(last)
a.pop()
console.log(a); // 4
// to remove a first element:
a.shift()
console.log(a); // 7

// Creating a function:
function call(){
    console.log("type1")
}
call(); // calling a function

// next type:
 // fun() without declaring it show error(let)
let fun=function(){
    console.log("next type")
}
fun();
// using var type :
var joy=function(){
    console.log("hey")
}
joy();
// using const:
const c=function(){
    console.log("hee")
}
c();
 // next type:
let hii=()=>{
    console.log("hai")
}
hii();
        // using global declaration variable for a function:
let z="hiiiiiiii";
let d=function(){
    console.log(z);
}
d();
// arrow type:
let d1=()=>{
    console.log(z);
}
d1();
// if else:
let e="haa";
let r=function(){
    let f="haai";
    if(e==f){
        console.log("same");
    }
    else{
        console.log("different");
    }
}
r();// different

// switch case:
var age=20;
switch(age){
    case 17:
        console.log("not eligible");
        break;
    case 18:
        console.log("eligible");
        break;
    case 20:
        console.log("more eligible");
        break;
    default:
        console.log("not valid");    
}
//            spread(...): it is used to copy the elements from one array to another
let arr=['a','b','c'];
let arr1=[...arr];
console.log(arr1);//
// use 2 : copying from two arrays into one:
let ans=[...arr , ...arr1];
console.log(ans); // [a,b,c,a,b,c]

// use 3 : paasing a array using spread to a function:
function diff(a1,b1,c1){
    return a1-b1-c1;
}
let ar=[5,2,1];
console.log(diff(...ar)); // 2
// by simply passing a array without spread, it is undefined
// passing a function:
let y=(x)=>{
    x();
}
let w=()=>{
    console.log("iam function!!")
}
y(w);
// setTimeout(f_name,time)--> it will display after the time
setTimeout( ()=>{
    console.log("fast")
},1000
);
console.log("come");
const j=()=>{
     setTimeout(
        ()=>{
        console.log("thank")
        },1000
     )    
}
j();
// loop:
for(var i=1;i<=5;i++){
    console.log("a");
}
// loop with Timeout:
for(var i=1;i<=5;i++){
    setTimeout( ()=>{
       console.log("A");
    },3000
    )
}
// continue:
for(var i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
*/
// type conversion:
// IMPLICIT:
 let k=10;
 let v="20";
 console.log(k+v); // it will convert the k into string    O/P:1020

// EXPLICIT:
v=Number(v) // convert the string into number
console.log(k+v); // 30
y=String(k); // convert number into string
console.log(y+10); // 1010

             // Math Functions:
// floor: it will convert the decimal number into a integer
console.log(8/3); // 2.666
console.log(Math.floor(8/3)); // 2

// ceil : it will convert the decimal number into a next integer value
console.log(8/3) // 2.6666
console.log(Math.ceil(8/3));

// max : maximum value 
console.log("Maximum value :" ,Math.max(7,10,20 ,40 ,13)); 
// we can check "n" numbers , which one is maximum

// min:
console.log("Minimum Value : ",Math.min(2,4,5,1,7));
// we can check "n" numbers, which one is minimum

// logical operators:
// And (&&)
console.log((4>3)&&(4>2)); // true

// Or (||)
console.log((4<3)||(4<2)); // false

// !
var g=true;
console.log(!g); // false

// Ternary Operator
console.log((5>=4)?true:false); // true
console.log((5<=4)?true:false); // false

// Array:
var arrr=[1,2,3,4,5];
for(let i of arrr){
    console.log(i);
}
// we can check maximum value in a array using Math function with Spread(...)
console.log("Maximum Value in a Array :",Math.max(...arrr));

// indexOf() method:
console.log("value of 4th index :",arrr.indexOf(4));

// Reverse a array:
console.log(arrr.toReversed());

 
// typeof();
console.log(typeof("7")); // String
console.log(typeof(7)); // Number
console.log(typeof(arrr)); // Object
console.log(typeof(null)); // Object

// Problems:
  // Reverse a String :
var s="hii";
console.log(s.split('').reverse().join('')); // iih

// palindrome:
var s1="madam";
var s2=s1.split('').reverse().join('');
console.log((s1==s2)?"Palindrome":"Not a Palindrome"); // Palindrome

// count vowels:
var w1="king";
var count=0;
var w2="aeiou";
for(var i of w1){
    if(w2.includes(i)){
        count++;
    }
}
console.log(count); // 1

// upperCase first Letter:
w4="queen";
w4=w4.charAt(0).toUpperCase()+w4.slice(1);
console.log(w4);

// check anagrams:
o="listen";
o1="silen";
o=o.split('').sort().join('');
o1=o1.split('').sort().join('');
if(o==o1){
    console.log("True");
}
else{
    console.log("False");
} // false

// check first non repeating char
var v1="eefgg";
for(var i of v1){
    if(v1.indexOf(i)==v1.lastIndexOf(i)){
        console.log(i);
        break;
    }
}

// replaces:
var h1="hii hello";
if(h1.includes(" ")){
    h1=h1.replace(" ","-");
}
console.log(h1);

// maximum number in a array:
var list1=[1,2,9,3,5];
console.log("Maximum Value in a Array :",Math.max(...list1));

// reverse a array:
var list1=[1,2,9,3,5];
console.log(list1.toReversed());

// Sort the array:
var list1=[1,2,9,3,5];
console.log(list1.sort());