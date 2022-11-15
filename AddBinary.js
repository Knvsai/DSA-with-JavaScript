var AddBinary = function(a,b){
    let sum =0;
    if(a.length<52 && b.length<52){
        sum += parseInt(a,2)+parseInt(b,2);
        return sum.toString(2)

    }else{
        sum += BigInt("0b" + a) + BigInt("0b" +b)
        return sum.toString(2)
    }
}