function length(str){
    let count=0;
    let i=0;
    while(true){
        if(typeof str[i]==='undefined'){
            break;
        }
        count=count+1;
        i++;
    }return count;
}console.log(length('Deepti'));