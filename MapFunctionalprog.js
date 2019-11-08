var num=[2,4,5,8]
var arr=[]
arr=num.map(function(data)//Map is used when you need to perform operations on all the data to get the desired results.

{
    return data*2;
}).map(function(data1)
{
    return data1+1;
})
console.log(arr.shift());
console.log(arr);
//console.log(arr.unshift());
//console.log(arr);