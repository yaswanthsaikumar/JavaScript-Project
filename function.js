function dog()
{
   return "Iam a good dog";
    //return msg;
}
console.log(dog());

function cat(name)
{
    return "my name is"+" "+name;
}

console.log(cat('jimmy'));

var msg = function cat(name){
    return "my name is"+" "+name;
}
console.log(cat('jimmy'));

var msg = (function cat(name){
    return "my name is"+" "+name;
}('jimmy'));
console.log(msg);
