var person =
{
    name:'yash'
}
var person1={
    name:'sai'
}
 function names()
{
    return this.name;  //“this” refers to invoker object (parent object)
    //In Javascript, property of an object can be a method or a simple value.
    //When an Object's method is invoked then “this” refers to the object which contains the method being invoked.
}
console.log(names.bind(person1)());//Bind creates a new function that will have 'this' set to the first parameter passed to bind() .
//The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular 'this' value.
//2nd ex
let num={
    x:23,
    y:32
}
 function number()
{
    return this.x+this.y;
}
let boun=number.bind(num);
console.log(boun());

//3rd example using call
var namer={
    name1:'vasu'
}
function thing(arg,arg1)
{
    return this.name1+" "+arg+" "+arg1        //call is used to invoke "this" with an individual arguments unlike bind as calling a function.
}//Call(all) invokes the function and allows you to pass in arguments one by one.
//Apply(array) invokes the function and allows you to pass in arguments as an array.
//Bind(function) returns a new function, allowing you to pass in a this array and any number of arguments
console.log(thing.call(namer,'english','spanich'))
var lang=['eng','tel','urd']
console.log(thing.apply(namer,lang))
