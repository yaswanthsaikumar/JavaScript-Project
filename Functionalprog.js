var testscore=[23,55,65,87,45]
var arr=[]
arr=testscore.filter(function(test)
{
    return test>50;

})
console.log(arr)
//we can also do this by oop using for loop
var a = [];
for(var i=0;i<testscore.length;i++)
{
    if(testscore[i]>50)
    {
       // a[i]=testscore[i];//[ 55, 65, 87 ]
        a.push(testscore[i])
    }
}
console.log(arr);

//eg2 lil complex
var forecast=[
    {
    day:'monday' ,sun:true
    },
    {
        day:'tuesday' ,sun:true
    },
    {
        day:'wednesday' ,sun:false
    },
    {
        day:'thursday' ,sun:true
    },
    {
        day:'friday' ,sun:false
    }]
    var array=[]
    array=forecast.filter(function(weat)//simply filter is used when you want to filter the data using some conditions.
    {
        return weat.sun==true
    })
    console.log(array)