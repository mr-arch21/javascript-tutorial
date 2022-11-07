// template literals in es6
for(let i=1;i<=10;i++){
    tableOf= 13
    console.log(`${tableOf} * ${i} = ${tableOf * i}`)
}
// default parameters
function mul(a,b=9){
    return a*b
}
console.log( ` multiply of two number is ${mul(21)}`)
// far arror function 
// normal way of writing fuction

// console.log(sub())
// function sub()
// {
//     let a=6,b=7
//     let diff=a-b
//     return `difference of two number is ${diff}`
// }



// convert normal function to fat arror function=>in this fat-arror function we can't call the fuction before the initailisation
const sub=()=>{
    let a=6,b=7
    let diff=a-b
    return `difference of two number is ${diff}`

}
console.log(sub())


const add=()=>`sum of two number is ${(a=7)+(b=8)}`
console.log(add())
