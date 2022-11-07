// map and reduce method
//Array.prototype.map()
// for each and map function are same but we prefer map fn
const array1=[2,4,5,6,7,89,97,654,43]
//num>7
// let newarray=array1.map((curr_elem,index,arr)=>{
//         return curr_elem>7
// })
// console.log(array1)
// console.log(newarray)//output:=boolean

let newarray=array1.map((elem,index,arr)=>{
        return `Index no = ${index} and the value is ${elem} belong to the ${arr}`
})
console.log(newarray)

//reduce method
//flatten an array means to  convert the 3d or 2d array into array
//single dimensional array 
//the reducer function take four arguments
// accumulator ,current value,current index ,source array
 //it is used to calculate sum differnce product because we canot find these thing in map filter
let arr=[5,6,2]
let sum= arr.reduce((accumulator,curelem,index,arr)=>{
        return accumulator *=curelem
},7)
console.log(sum)
 
const ar7=[
          ['x1','x2'],
          ['x3','x4']     
]
let flatar=ar7.reduce ((accum,currval)=>{
     return accum.concat(currv1al)
})
console.log(flatar)

 