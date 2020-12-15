let numbers = [8,42,38,111,2,39,1];
console.time('record-lazysort');
let index = 0;
const numberslength = numbers.length;
function printSortedNumber(sortedNumber){
    console.log(sortedNumber); 
    if(index===numberslength-1){
        console.timeEnd('record-lazysort')
    }
    index=index+1;
}
numbers.forEach((num)=>{
    setTimeout(()=>{printSortedNumber(num);},num);
});
