// var=function scope
// let and const =block scope
var myname="vikings"
console.log(myname)
myname= "ivar"
console.log(myname)


let my1="vikings"
console.log(my1)
my1= "ivar"
console.log(my1)
// if we use "const " instead of let and var  we can't change the value once we initialize

// const my="vikings"
// console.log(my)
// my= "ivar"
// console.log(my)
function biodata(){
    var fname="vinod" //var===>function scope
    console.log(fname)
    if(true){
        var lname="thapa"
        console.log("inner "+lname)
        console.log("inner "+fname)
    }
    console.log("outer "+lname)

}
console.log(fname)
biodata()


// function biodata1(){
//     let fname="vinod" //let  & const ===>block scope
//     console.log(fname)
//     if(true){
//         let lname="thapa"
//         console.log("inner "+lname)
//         console.log("inner "+fname)
//     }
//     console.log("outer "+lname)
// }
// biodata1()