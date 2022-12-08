let a = require("readline-sync");
var n= a.questionInt("enter your number--")
let i=1
while (i<=n){
    co=0
    if (n%i==0){
        j=1
        while (j<=i){
            if (i%j==0){
                co=co+1
            }j++;
        }
        if(co==2){
            console.log(i)
        }
    }
    i++;
}