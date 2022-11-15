function findStars(star){
    var count = 0;
    var start = 0;
    for (var i = 0; i < star.length; i++) {
        if(star[i]=='|'){
            start = i;
            break;
        }
    }
    for (var i = start+1; i < star.length; i++) {
        if(star[i]!= '|'){
            count += 1;
        }
    }
    return count-2;
}


var a = findStars('*|****|**')
console.log(a)

