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

// foreach:
list1=[1,2,3,4,5];
list1.forEach((ele,i)=>{
     console.log("index",i,":","value",ele);
}
) // ele = elements , i = index

        // Map:
// Using Map to transform into a new array
let jj=list1.map(e=> e*2);
console.log(jj); // 2,4,6,8,10

let ii=jj.map(e=>{
    if(e==6){
        console.log(e); // 6
    }
})

            // Filter:
  // Mostly Used for Delete
  var kk=jj.filter(e=>e==5)
  console.log(kk); // it stores only element 5 in kk

           // Reduce:
    // by using this we can use the arithmetic operators on it
   let ll=jj.reduce((a,b)=>a*b)
   console.log(ll);
 
         //some:
   // it is used to check whether the element is in the array: 
   let res=jj.some(a=> a==10);
   console.log(res); // false

         //find:
    // it is used to find the number in a array. if exists return the number , if not exists return undefined
   res=jj.find(a=> a==4);
   console.log(res); // 4
   res=jj.find(a=> a==10);
   console.log(res); // undefined


         // findIndex:
    // it will return the index if exists , if not return -1
   var r=jj.findIndex(a=> a==6);
   console.log(r); // 3
   r=jj.findIndex(a=> a==10);
   console.log(r); // -1
     
       // splice:
    // it is used to remove many elements using index and count 
   console.log(...jj);
  // var zz=jj.splice(1,2); // remove start from 1th index and delete two elements including 1th index
   var zz=jj.splice(1,2,3,5); // we are able to  inserting new elements in that place of deleted elements. Here, I add 3 and 5. 
   console.log(zz);
   console.log(...jj);

      // fill:
   // var ff=jj.fill();
  // var ff=jj.fill(2,6);
  //  console.log(ff);


      // shallow copy:
  let a1=[12,14,16];
  let a2=[...a1];
  console.log("old Array :",a1); //12,14,16
  console.log("new Array :",a2); //12,14,16
 a2[1]=15;
 console.log("after changing",a2); //12,15,16
 console.log("after changing",a1); //12,14,16
  // if we changing in a copied array it doesn't affect original array in shadow copy.
  
     //Nested Array (Shallow copy):

  let gh=[2,4,6,8,[1,3,5,7]];
  let fh=[...gh];
  console.log(gh);
  console.log(fh);
  fh[4][3]=9;
   console.log("after changing :",gh); //[ 2, 4, 6, 8, [ 1, 3, 5, 9 ] ]
   console.log("after changing :",fh); //[ 2, 4, 6, 8, [ 1, 3, 5, 9 ] ]
 // if we change in a copied array in nested array , it will affect in original array also.

     // Concatenate the arrays:
     // it is used for concatenate:
   let sr=[1,2,3];
   let jk=[4,5,6];
   // Method 1 :
   let d=[...sr , ...jk];
   console.log("method 1 :",d);
   // Method 2 :
   let t=sr.concat(jk);
   console.log("method 2 :",t);

   // Deep Copy:
      let bb=[...gh];

   // Find Missing element in a Array:

   let tr=[1,2,3,4,6,7];
   var c=1;
   for(var i of tr){
    if(i!=c){
        console.log("missing number :",c);
        break;
    }
    else{
        c++;
    }
   }
   // problem 2:
   // Add any two Numbers in a Array to get Ten :
   // Return Those Numbers
   let gg=[5,4,7,3];
   for(let i=0;i<gg.length;i++){
    for(let j=i+1;j<gg.length;j++){
        if((gg[i]+gg[j])==10){
           console.log("Add These Number :",gg[i],",",gg[j]);
        }
     }
   }

 
   // problem 3:
 // Add zero to the end in a Array:
   let n=[1,4,3,0,6,2,0];
   var aa=[];
   var u=0;
   for(let i=0;i<n.length;i++){
    if(n[i]!=0){
        aa[u++]=n[i];
    }
   }
   for(let j=0;j<n.length;j++){
    if(n[j]==0){
        aa[u++]=n[j];
    }
   }
   console.log(...aa);
   
   //Problem 4:
   
let ee=[1,6,4,8,11,3,4,10,6];
let cc=0;
for(let i=0;i<ee.length;i++){
    for(let j=i+1;j<=ee.length-1;j++){
        if(ee[i]<ee[j]){
            cc=1;
            break;
        }
        if(cc==0){
            console.log(ee[i]);
        }
    }
}
 // Dictionary :
  let wd={"name":"alice","roll_no":1};
 console.log(wd);

//add :
wd["dept"]="ECE";
console.log(wd);
 
// update :
wd["roll_no"]=7;
console.log(wd);

// Rename the keys:
wd["names"]=wd["name"];
delete wd["name"]; // Delete the old key
console.log(wd);


let kr=["john","alice","coke"];
for(let [k,v] of kr){
    console.log(k,v);
}
// Array to Dictionary :
 // method 1 : 
console.log(Object.entries(kr));
let oo={};
let jd=["hii","hai","bangalore","china"];
for(let [k,v] of Object.entries(jd)){
     oo[v.length]=v;
}
console.log(oo);

 // method 2 :
let bn={};
for(i of jd){
    let ll=i.length;
    bn[ll]=bn[ll] || [];
    bn[ll].push(i);
}
console.log(bn);
