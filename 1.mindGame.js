/* This function will take a positive number as input
 and return the output after calculation.
 */
function mindGame(number){
    if(typeof number === 'number' && number > 0){
        let result= (((number*3 )+10)/2)-5;
        return result;
    }
    return 'Error: Input should be positive number';
       
}

let output = mindGame(100);
console.log(output);