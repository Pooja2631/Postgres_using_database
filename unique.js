// let arr=[6,1,3,5,6,3,1]
// let i=0
// let a=[]
// while (i<arr.length){
//     if(!a.includes(arr[i])){
//       a.push(arr[i]);
//     }i++
// }
// console.log(a)


let a=[[1,2,3],[4,5,6],[7,8,9]]
for (let i of a){
  for(let j of i){
    if(j%2==0){
      console.log(j)
    }
  }
}