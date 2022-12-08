let a=[[1,2,4],[26,5,6],[8,26,31]]
let i=0
let l=[]
while (i<a.length){
    let j=0
    let max=0
    while (j<a[i].length){
        if(max<a[i][j]){
            max=a[i][j]
        }
        j++;
    }l.push(max)
    i++
}console.log(l)
