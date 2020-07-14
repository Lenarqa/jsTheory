// function createCalcFunction(n){
//     return function(){
//         console.log(1000 * n)
//     }
// }

// let culc = createCalcFunction(3);
// culc();

// function createIncrementor(num){
//     return function(n){
//         return n + num;
//     }
// };

// let add1000 = createIncrementor(1000);
// console.log(add1000(100));

// let add10 = createIncrementor(10);
// console.log(add10(90));


// function urlGenerator(domain){
//     return function(url){
//         return `https://${url}.${domain}`;
//     }
// }

// let com = urlGenerator('com');
// console.log(com('vk'));

// let ru = urlGenerator('ru');
// console.log(ru('valievlr'));

function bind(context, fn){
    return function(...args){
        return fn.apply(context, args);
    }
}

const person = {
    name: "Lee",
    age: 21
}

function logInfo(job){
    console.log(this.name + " " + this.age  );
}

bind(person, logInfo)();