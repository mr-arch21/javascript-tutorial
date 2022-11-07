const months=['jan','march','april','june','july']
//Array.prototype.splice()=>add and/or remove an element from an array
// sol:1 
// const newmoths=months.splice(months.length,0,'dec')
// console.log(months)


// sol:2 splice return the array of deleted element
// const newmoths=months.splice(months.length,0,'dec')
// console.log(newmoths)


//sol:3
const indexOfMonth=months.indexOf('march')
if(indexOfMonth!=-1){
    const updateMonth=months.splice(indexOfMonth,1)//if we use 2 instead of 1 it will delete two elemnts
    console.log(months)
    console.log(updateMonth)

}else{
    console.log('no data found')
}

