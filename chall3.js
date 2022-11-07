// find the square root of each elemetn in an array

//solution :=

// let arr=[25,36,49,64,81]
// let arrsq=arr.map((curelem)=>{
//     return Math.sqrt(curelem)
// })
// console.log(arrsq)


//multiply each element by 2 and return only those elements which are greater than 10
let arr=[2,3,4,6,8]//we can chaining too
let arr2=arr.map((curelm)=>{
    return curelm*2
}).filter((curelm)=>{
    return curelm >10
})
console.log(arr2)