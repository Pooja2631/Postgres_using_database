let n=[1,3,4,6,8,2,7]
let i=0
let a=[]
while (i<n.length){
    n.sort()
    s=n[i]*n[i]
    a.push(s)
    i=i+1
}
console.log(a)
