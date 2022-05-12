// // ОБЪЯВЛЕНИЕ 
// function myFunc(params){
//     statement
// }
// // ВЫЗОВ
// myFunc(args)

function sayHello(){
    console.log('Hello World!');
}
// sayHello()

function toGreetUser(value = 'USER'){
    if (!value) {
        return `Hello USER`
    }
    return `Hello ${value}`;
}
let greeting = toGreetUser('user');
// console.log(greeting);

greeting = toGreetUser('Sandra');
// console.log(greeting);

greeting = toGreetUser();
// console.log(greeting);

greeting = toGreetUser(NaN);
// console.log(greeting);

greeting = toGreetUser(null);
// console.log(greeting);

greeting = toGreetUser(0);
// console.log(greeting);
// 