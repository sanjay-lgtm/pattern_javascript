let n=5
for(let i=1;i<=n;i++){
    let str = '';
    let count =1;
    for(let j=1;j<=n;++j){
        if(i+j >= 1+n && j<=n){
            str += count.toString()+' ';
            count += 1;
        } else{
            str += '  ';
        }
    }
    console.log(str)
}
for(let i=n-1;i>=1;i--){
    let str='';
    let count =1;
    for(let j=1;j<=n;++j){
        if(i+j >= 1+n && j<=n){
            str += count.toString() + ' ';
            count += 1;
        }else{
            str += '  ';

        }
    }
    console.log(str);
}