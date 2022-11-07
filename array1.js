// var mydost=new Array //optional line 
// var mydost=['ram','raja',67,true,'rakesh']

// var myfriend=["ram","shyam","mukesh"]
// console.log(myfriend[1])


// traversal of an array


// if we want to check  the length of element of an array
// console.log(myfriend.length)
// console.log(myfriend[myfriend.length-1])



// we use for loop to navigate
// var myfriend=["ram","shyam","mukesh"]
// for(var i=0;i<myfriend.length;i++){
//     console.log(myfriend[i])
// }


// after es6 we have for in and for of loop
// var myfriend=["ram","shyam","mukesh","raja"]
// for(let elements in myfriend){  //for in loop provide the index of the element
//     console.log(elements)
// }


// var myfriend=["ram","shyam","mukesh","raja"]
// for(let elements of myfriend){  //for of loop provide the value  of the index 
//     console.log(elements)
// }

// for each loop--!!we can't use break statement in for each loop
// var myfriend=["ram","shyam","mukesh","raja"]
// myfriend.forEach(function(element,index,array){  //traditional method to define function
//     console.log(` ${element} index : ${index}  ${array}`)
// })

// !!!if we want to use the this argument we cannot use fat-arrow fuction
// myfriend.forEach((element,index,array)=>{  //fat-arrow method to define function
//     console.log(` ${element} index : ${index}  ${array}`)
// })


// filter and searching in an array


// searching ###
// Array.prototype.indexOf()

// var myfriend=["joe","mike","will","eleven","sadie"]
// console.log(myfriend.indexOf("mike",2))


// Array.prototype.lastIndexOf()
// var myfriend=["joe","mike","will","eleven","sadie","mike"]
// console.log(myfriend.lastIndexOf("mike",3))


// Array.prototype.includes()===>it will do forward search 
// var myfriend=["joe","mike","will","eleven","sadie","mike"]
// console.log(myfriend.includes("mike",4))



//for filteration

// Array.prototype.find()===>it return only one value
// var prices=[100,150,200,250,300,350,400,450,500]
// // price>300
// const findPrices=prices.find((current_value)=>{
//     return current_value>300

// })
// console.log(findPrices)

// // OR
// console.log(prices.find((current_value)=>current_value>900))//if elements are not present then return undefined

// // Array.prototype.findIndex()
// console.log(prices.findIndex((current_value)=>current_value>900))//if elements are not present then return -1



// Array.prototype.filter()
// var prices=[100,150,200,250,300,350,400,450,500]
// const newPriceTag=prices.filter((elem,index)=>{//if elements are not present then return empty array[]
//     return elem<300
// })
// console.log(newPriceTag)



// HOW TO SORT AN ARRAY
// Array.prototype.sort()

// const months=['march','may','dec','april','june']
// console.log(months.sort())


// const a1=[100,200,30,20,10,1,10000]
// console.log(a1.sort())// sort converting the number into strings  it will produce wrong result with numbers
// console.log(typeof(a1))



//perform crud
//Array.prototype.push()        ====  it will return the new length of an array
// const animals=['goats','sheep','dogs']
// const count=animals.push("chicken")
// console.log(animals)
// console.log(count)
// animals.push("cows","donkey","cat")
// console.log(animals)

//Array.prototype.unshift()=it will add the element in the starting of the array
// const animals=['frog','dog','cow']
// animals.unshift('cat','buffalo')
// console.log(animals)


// const myno=[1,2,3,5]
// console.log(myno.unshift(4,6))
// console.log(myno)


//Array.prototype.pop()
// const plants=['cauliflower','brocoli','kale','tomato','cabage'] 
// console.log(plants)
// console.log(plants.pop())
// console.log(plants)


//Array.prototype.shift()
const plants=['cauliflower','brocoli','kale','tomato','cabage'] 
console.log(plants)
console.log(plants.shift())
console.log(plants)