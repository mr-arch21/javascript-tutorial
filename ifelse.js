var area="square"
var pi=3.14,l=5,b=4,r=7;
if(area=="circle"){
    console.log("the area of the circle is "+ pi*r**2)
}else if(area=="triangle"){
    console.log("the area of the triangle is "+ (l*b)/2)
}else if(area=="rectangle"){
    console.log("the area of the rectangle is "+ (l*b))
}else{
    console.log("please enter valid input")
}