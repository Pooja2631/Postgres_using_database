let a=[[1,2,4],[26,5,6],[8,26,31]]
let i=0
let l=[]
while (i<a.length){
    let j=0
    let sum=0
    while (j<a[i].length){
        sum=sum+a[i][j]
        j++;
    }l.push(sum)
    i++
}console.log(l)
