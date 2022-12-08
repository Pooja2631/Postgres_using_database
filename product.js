let arr=[6,1,3,5,6,3,1]
let i=0
let a=[]
let pro=1
while (i<arr.length){
    if(!a.includes(arr[i])){
      a.push(arr[i]);
      pro=pro*a[i]
  }i++
}
console.log(a)
console.log(pro)
