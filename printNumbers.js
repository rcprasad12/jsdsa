/* function printNumbers(n){
    if(n == 0){
        return ;
    }

    

    console.log(n);

    printNumbers(n-1);
}


printNumbers(5);


*/

function printNumbers(n){
    if(n == 0 ){
        return ;

    }
    printNumbers(n-1);

    console.log(n);

}

printNumbers(5);

