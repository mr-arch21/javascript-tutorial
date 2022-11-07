var area="rectangle"
var pi=3.14,a=4,b=5,r=8
switch(area){
    case "circle":
        console.log("the area of the circle is "+ pi*r**2)
        break
    case "rectangle":
        console.log("the area of the rectangle is "+ a*b)
        break
    case "triangle":
        console.log("the area of the triangle is "+ (a*b)/2)
        break
    default:
        console.log("please enter valid input")
}