function comparing(str1,str2){
    let m =str1.length;
    let n = str2.length;
    let res = '';
    while(m>0 && n>0){
        if(str1[0]<str2[0]){
            res += str1[0];
            m--;
        }else{
            res += str2[0]
            n--;
        }

    }
    return res
}
let b = comparing('cb','cd')
console.log(b)