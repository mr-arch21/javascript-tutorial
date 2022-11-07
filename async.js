// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.
 console.log(myName)
 var myName//if we use a let  and const it give error
 myName='thapa'
 //hoow it will be in output during creation phase
//  var myName=undefined
//  console.log(myName)
//  myName='thapa'


// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.

let a ='hello guys'
const first=()=>{
let b ='how are you'
 const second=()=>{
    let c ='hi i am fine thankyou'
    console.log(a+b+c)
 }
 second()
}
first()
// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.
const outerFun=(a)=>{
    let b=10
    const innerFun=()=>{
        let sum =a+b
        console.log(`the sum of the two no is ${sum}`)
    }
     return innerFun
}
let checkClousure=outerFun(5)
console.dir(checkClousure)



///synchronous
const fun2=()=>{
    console.log("function 2 is called")
}
const fun1=()=>{
    console.log('func 1 is called')
    fun2()
    console.log('func 1 is called again')
}
fun1()

//async
const f2=()=>{
    setTimeout(()=>{
        console.log("function 2 is called")
},2000)
}
const f1=()=>{
    console.log('func 1 is called')
    f2()
    console.log('func 1 is called again') 
}
f1()