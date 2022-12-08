let list1=[3,4,5,6,7,8]
let i=0
while (i<list1.length){
    j=1
    a=[]
    while (j<list1.length){
        sum=list1[i]+list1[j]
        // if (!a.includes (list1[i])){
            a.push(sum)
        j=j+2
    }
    i=i+2
}console.log(a)
