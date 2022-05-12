// const funcName = function(){}
// const funcName = () => {}

// const toShowError = () => {
//     return 'Error'
// }

const toShowError = () => 'Error';

let result = toShowError();
// console.log(result);

// const getResponse = (value) => {
//     // if(Boolean(value)){
//     //     return value;
//     // } else {
//     //     return 'Error'
//     // }
//     return Boolean(value) ? value : 'Error';
// }
const getResponse = value => (Boolean(value) ? value : 'Error');
// console.log(getResponse(false));