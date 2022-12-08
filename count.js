let arr=[1, 2, 2, 5, 8, 4, 4, 8,8,9]
let i=0
let a=[]
let count=0
while (i<arr.length){
    if(!a.includes(arr[i])){
      a.push(arr[i]);
      count=count+1
  }i++
}
console.log(a,"total unique elements",count)