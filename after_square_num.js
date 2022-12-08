// let a=[1,3,4,2,6]
// let i=0
// let b=[]
// let max=0
// while (i<a.length){
//     c=a[i]*a[i]
//     b.push(c)
//     if (b[i]>max){
//         max=b[i]
//     }
//     i++;
// }
// console.log(max)


let a=[1,3,4,7,8]
let i=0
let min=a[i]
while (i<a.length){
    if (a[i]<min){
        min=a[i]
    }i++;
}console.log(min)