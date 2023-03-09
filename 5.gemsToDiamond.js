/* This function will take three friends' gems number as input
 and convert gems to diamond .
 */
function gemsToDiamond(friend1,friend2,friend3){
    if(typeof friend1 === 'number' && typeof friend2 === 'number' && typeof friend3 === 'number' ){
        const gemsPower1 = 21;
        const gemsPower2 = 32;
        const gemsPower3 = 43;
        //conver into diamonds
        let diamond1 = friend1 * gemsPower1;
        let diamond2 = friend2 * gemsPower2;
        let diamond3 = friend3 * gemsPower3;

        let totalDiamond = diamond1 + diamond2 + diamond3;

        if(totalDiamond >= (1000*2))
        {
            return  totalDiamond - 2000;
          
        }
        else{
            return totalDiamond ;
        }
    }
    return 'Error: All Inputs should be number';
    
}
let output = gemsToDiamond(100,5,1);
console.log(output);