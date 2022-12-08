// 1.question

// (function(){
//     var a=b=3;
// })()
// console.log(typeof a)
// console.log(typeof b)

// 2.question

// function main(){
//     return {
//         name:"deepti"
//     }
// }
// console.log(main())

// 3.question

// console.log(1+1)
// console.log(1+ +"2" + "4")
// console.log(1+ +"2" + +"2")
// console.log(1+ -"1" + + "2")
// console.log("P" -"D" +"4")
// console.log("D" -"P" + 2)


// 4.question

// var a=0;
// function b()
// {
//     a=10;
//     return ;
//     var a=function(){}
// }
// b()
// console.log(a)

// 5.question
// kyuki object ek memory hai

// var a={};
// b={}
// console.log(a===b)

// var a={}
// var b=a;
// console.log(a===b)

// 6. question
// hoisting

// function test(){
//     return foo()
//     function foo()
//     {
//         return 26;
//     }
// }
// console.log(test())


// 7.question

// console.log(test)
// var test=function(){
//     console.log("Hello")
// }

// 8.question

// console.log(true+true)
// console.log(true)
// console.log(true+false)
// console.log(true+true-false)
// console.log(-true+true-false)
// console.log(-true-true-false)

// 9.question

// let task=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('done')
//     },100)
// })
// task.
// finally(()=>{
//     console.log("finally")
// }).
// then((data)=>{
//     console.log(data)
// }),
// (error)=>{
//     console.log("error",error)
// }

// 10.question

// let a=[3,1,6,4,26,31]
// a.sort((a,b)=>a-b)
// console.log(a)

// 11.question
// lexical scope

// function Hello(){
//     var a=10;
//     function innerFunction()
//     {
//         return a;
//     }
//     return innerFunction()
// }
// console.warn(Hello());

//closure

// function Hello()
// {
//     var a=10;
//     function innerFunction()
//     {
//         return a;
//     }
//     return innerFunction;
// }
// var inner=Hello();
// console.dir(inner())

// 12.question
// call stack

// function mul(a,b){
//     return a*b;
// }
// function Square(a){
//     var s=mul(a,a);
//     console.log(s)
// }
// Square(5)

// 13.question

// let data =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("World")
//     },1000)
// })
// data.then((item)=>{
//     console.log("Hello",item)
// }).catch((err)=>{
//     console.log("done",err)
// })

// 14.question

// console.log(!!10+20)

// 15.question
// let a=0
// console.log(a++)

// 16.question

// console.log(3+4+"5")

// 17.question

// const obj={
//     a:'one',
//     b:'two',
//     a:'three'
// };
// console.log(obj)

// 18.question

// let person={name:'deepti'};
// const a=[person];
// person=null;
// console.log(a);

// 19.question

// function a(...args){
//     console.log(typeof args);
// }
// a(26);

// 20.question
// let obj={
//     name:'deepti'
// };
// let user=Object.assign({},obj);
// user.name='pooja'
// console.log(obj)

// 21.question

// let data={
//     name:'Pooja',
//     age:19,
//     city:'Punjab'
// }
// console.table(data)

// 22.question

// let str='Hello, This is side Deepti';
// console.log(str.split());

// 23.question
// let str='Hello, This is side Deepti';
// console.log(str.split(""));
// console.log([...str]) 

// 24.question
// let str='Hello, This is side Deepti';
// // console.log(str.split(" "));
// console.log(str.replace(/H/g,"_"))
 
