// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 
//1st way
let bioData={
    myName:'aryan',
    myAge:23,
    getData:function(){//we donnt need  to write : and functionn
        console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`)
    }}
console.log(bioData.myName)
bioData.getData()
// 👉 What if we want object as a value inside an Object 


let bioData1 = { 
  myName : {
    realName : "vinod",
    channelName : "thapa technical" 
  },
  myAge : 26,
  getData (){
    console.log(`My name is ${bioData1.myName} and my age is ${bioData1.myAge}`);
  }

}

console.log(bioData1.myName.channelName );
// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  
// console.log(this.alert('awsome'))
// // ex 4 
const obj = {
    myAge : 26,
    myName() {
      console.log(this.myAge);
    }
}
obj.myName();//this represent obj

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();//represent window


