// pseudoarray arguments
function getScore(...args){
  // console.log('arguments:', arguments);
  // let total = 0;
  // for(let i = 0; i < arguments.length; i++){
  //     console.log(parseFloat(arguments[i]));
  //     total = total + parseFloat(arguments[i]);
  // }
  // console.log('total:', total);
  // return total;
  console.log(args);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    console.log(parseFloat(args[i]));
    total = total + parseFloat(args[i]);
  }
  console.log('total:', total);
  return total;
}
getScore()
getScore(0);
const firstGroup = getScore('8','10','9','7', 45);

function getMiddleScore(groupScore, groupCount){
return groupScore / groupCount;
}

console.log(getMiddleScore(firstGroup, 4));
console.log(getMiddleScore(40, 4));
console.log(getMiddleScore(99, 20));

