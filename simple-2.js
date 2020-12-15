let numbers = [8,42,38,111,2,39,1];
function printSortedNumber(sortedNumber){
    console.log(sortedNumber);
}
numbers.forEach((num)=>{
    setTimeout(()=>{printSortedNumber(num);},num);
});

// let numbers2 = [1,10,11,90,1,5,3,6];
// numbers2.forEach((num)=>{
//     setTimeout(()=>{printSortedNumber(num);},num);
// });