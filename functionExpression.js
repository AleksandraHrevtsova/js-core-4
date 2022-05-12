// const myFunction = function(params){
//     statement
// }
const toGetSum = function toSum(num1 = 0, num2 = 0){
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    // console.log('num1:', isNaN(a)); // 0 => false
    // console.log('num2:', isNaN(b)); // '2sfsd' => true       
    if(isNaN(a)){
        a = 0
    }
     if (isNaN(b)) {
       b = 0;
     }
  return a + b;
}
let result = toGetSum(0, 1)
// console.log(result);

result = toGetSum(0, 1, 2);
// console.log(result);

result = toGetSum(undefined,2);
// console.log(result);

result = toGetSum(undefined, undefined);
// console.log(result);

result = toGetSum();
// console.log(result);

result = toGetSum('1', '2');
// console.log(result);

result = toGetSum('1.2reg', '2sfsd');
// console.log(result);

result = toGetSum('dsg', 'sfsd');
// console.log(result);