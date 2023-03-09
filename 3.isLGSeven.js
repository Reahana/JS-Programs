/* This function will take a  number as input
 and return difference between input and 7 if the 
 difference is smaller than 7 otherwise return double of input .
 */
function isLGSeven(num){
    if(typeof num === 'number'){
        let difference = num-7;
        if(difference<7){
            return difference;
        }
        else{
            let doubleNum = num *2;
            return doubleNum;
        }
    }
    return 'Error: Input should be a number';
   
}

let output = isLGSeven(13);
console.log(output);