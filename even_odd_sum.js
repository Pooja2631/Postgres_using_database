var a=[20,80,40,23,5,7];
i=0
even=0
odd=0
while (i<a.length){
    if (a[i]%2==0){
        even=even+a[i]
    }
    else{
        odd=odd+a[i]
    }i++;
}
console.log(even,"even sum")
console.log(odd,"odd sum")