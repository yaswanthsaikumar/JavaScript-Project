var score = [1,"sam",true,3,"lamb",false]
console.log(score[1]);

//array = [];
//object = {};
var list = ["king","kong","queen"];
list[3]="run";
list[4]="bun";

console.log(list);
var assign = list[3];
console.log(assign);
var length=list.length;
console.log(length);
//METHOIDS:
var list1=[23,33,45,45,43,46];//push and pop works on backend of an array.What is for front?
console.log(list1.length)
list1.pop();
console.log(list1);
console.log(list1.length);
list1.push(12,98);
console.log(list1);
console.log(list1.length);

var list2=[98,34,09,56,87];//shift and unshift works on front end of array
list2.shift();
console.log(list2.length);
console.log(list2);
list2.unshift(13,5,09,08);
console.log(list2.length);
console.log(list2);

//MORE METHODS
var list3=[1,5,3,8,5];
var list4=[3,5,7,98,9];
var list5=list3.concat(list4);
console.log(list5);
var list6=list5.reverse();
console.log(list6);
var list7=list5.sort();
console.log(list7);
var list8=list5.slice(1,4);
console.log(list8)
var list9=list5.slice(-3);
console.log(list9);