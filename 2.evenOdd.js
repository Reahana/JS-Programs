/* This function will take a string as input
 and determine the string is odd or even.
 */
function evenOdd(string){
    if(typeof string === 'string'){
        let getStringLength = string.length ;
        if(getStringLength%2==0){
           return 'even'
        }
        else{
           return 'odd'
        }
    }
    return 'Error: Input should be string';

}
let output = evenOdd('100');
console.log(output);