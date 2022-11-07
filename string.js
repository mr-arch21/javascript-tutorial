//js strings are used for storing and manipulating text
//you can use single or double quotes
//strings can be created as primittives
//from string literals, or as objects , using the string() constructor
let myName='vinod thapa'
let yt=new String("thapa technical")//string constructor
console.log(myName)
console.log(yt)

//to find the length of the string
let m1="aryan chaturvedi"
console.log(m1.length) 

//escape character
let anySentence="We are the so-called \"vikings\" from the north.";
console.log(anySentence)

//finding a text in a string
const mybd='i am the thapa technical'
console.log(mybd.indexOf("thapa"))

// lastindexof
const mybd1='i am the thapa technical'
console.log(mybd1.lastIndexOf("thapa",12))

//searching for a string in a string
//the search() method searches a string for a specified

//value and returns the position of the match
const mybd2='i am the thapa technical'
//the search (method cannot take a second start position argument)
let sData = mybd2.search('thapa')
console.log(sData)


//extracting string parts
//3 methods for extracting a part of string
//slice(start,end)
//substring(start,end)
//substr(start,length )
//the slice() method extracts a  part of a string and returns the extracted part in a new string
//the method takes 2 parameters :tthe start pos,and the end pos(end not included)
var str ="apple,banana,kiwi"
let res=str.slice(7,-1)
console.log(res) 


//the substring()method
//it is similar to slice()
//diff is that substring() cannot accept negative indexes
var str1='apple,mango,grapes'
let res1=str.substring(6,-4)//it counted from 0 pos to 6 pos
console.log(res1)


//the substr() Method
//substr() is similar to slice().
//the difference is that the second parameter specifies the length of extracted part. 
var str='apple , mango , kiwi'
let res2=str.substr(0,6)
let res3=str.substr(-4)
console.log(res3)

//replace method
let mb='my name is aryan chaturvedi'
let replacedata=mb.replace('aryan','Aryan')
console.log(replacedata)
console.log(mb)
//1-the replace() method does not change the string it is called on. it returns a new string.
//2-by default, the replace() method replaces only the first  match
//3-by default,the replace () method is case sensitive
//writing vinod(with upper-case ) will not work




//extract string character-3 methods
//charAt(position)
//charCodeAt(position)
//Property access [ ]


//the charAt() method
//returns the character at a specified index (position ) in a string
let s1='hello world'
console.log(s1.charAt(0))
//the charCodeAt() method returns the unicode of the character at a specified index in a string
//the method returns a utf-16 code (an integer betweeen 0 and 65535)
console.log(s1.charCodeAt(0))
//Property access [ ]
var s2='hello woerld'
console.log(s2[0])


//trim method remove whitespace from both side of a string
var s3='        helllo artist      '
console.log(s3.trim())


//split() method string converted into an array 
var txt='a,c,   v,|,b,n'
console.log(txt.split(","))
console.log(txt.split(" "))
console.log(txt.split("|"))