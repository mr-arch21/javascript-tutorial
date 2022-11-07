//date and time in js
//js date obj represent a single moment in  time in a platform independent format. date obj contain
//a no that represent ms since 1 jan 1970 utc
// there are 4 ways to create a new date obj:
// new Date()
// new Date(year,month,day ,hours ,minutes, seconds,milliseconds)
// //it takes 7 arguments
// new Date(milliseconds)
// //we can't avoid month section
// new Date(date string) 


// date obj are created with the new Date() constructor
let currDate=new Date()
console.log(currDate)
console.log(new Date())
console.log(new Date().toLocaleString())
console.log(new Date().toString())


//Date.now()
//returns the numeric value corresponding to curr time the number
//of ms elapsed since jan 1, 1970
console.log(Date.now())


//jan =0 dec=11
var d= new Date(2021,0,4,20,44,30,0)//minimum two argument month mandatory
console.log(d.toLocaleString())
var d1=new Date(1609574531435)
console.log(d1.toLocaleString())

console.log(currDate.toLocaleString())
console.log(currDate.getFullYear())
console.log(currDate.getMonth())
console.log(currDate.getDate())
console.log(currDate.getDay())

let currentime=new Date()
console.log(currentime.setHours(5))
console.log(currentime.setMinutes(5))
console.log(currentime.setSeconds(5))
console.log(currentime.setMilliseconds(5))
