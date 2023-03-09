 /* This function will take an number of array as input
 Find the total number of bad data (negative number) from 
 the given array
 */

 function findingBadData(numbers){
    if(Array.isArray(numbers)){
        let badData = 0;
        for(let i=0; i<numbers.length;i++){
            if(numbers[i]<0){
                badData++;     
            }
        }
        return badData;
    }
    return 'Error: Input should be an array';
    
 }


let output = findingBadData([1,-2,0,]);
console.log(output);