function num(a, n){
    let i,total=1;
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total;
}
    let arr = [1, 2, 3, 5];
    let N = arr.length;
console.log(num(arr, N));