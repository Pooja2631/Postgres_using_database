const list1 = [['g', 'f', 'g'],['i', 's','b'], ['e', 's', 't'] ]
let str=""
let i=0
while (i<list1.length){
    let j=0
    while(j<list1.length[i]){
        str=str+list1[i][j]
        j++;
    }i++;
}
console.log(str)

