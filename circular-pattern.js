let string = "";
for(let i=0;i<5;i++){
    for(let j=0;j<6;j++){
        if(((j==0|| j==5)&&(i != 0 && i != 4)) || ((i == 0 || i == 4) && (j>0 && j<5) ) )
            string += "*";
        else
            string += " ";
    }string += "\n";
}
console.log(string)