function oddishOrEvenish(n){
    let num = n.toString();
    let x=0;
    for(let i =0; i<num.length;i++){
        x+=parseInt(num[i]);
    }
    if(x%2===1){
        return "Oddish";

    }else return "Evenish";
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(186));
console.log(oddishOrEvenish(17853));
console.log(oddishOrEvenish(11));
console.log(oddishOrEvenish(8963));
//Kadirhan ŞAHİN