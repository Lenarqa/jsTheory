const person = {
    name: "lee",
    age: 21,
    job: "fullstack"
}

// object
const objProxy = new Proxy(person,{
    get(target, prop){
        console.log(`Getting prop ${prop}`)
        // console.log("target ", target);
        // console.log("prop", prop);
        return target[prop];
    },
    set(target, prop, value){
        if(prop in target){
            target[prop] = value
        }else{
            throw new Error(`no ${prop} field in target`);
        }
    },
    has(target, prop){
        return  ['age', 'name', 'job'].includes(prop);
    },
    deleteProperty(target, prop){
        console.log('delete ', prop);
        delete target[prop];
        return true;
    }
});

// function 
const log = text => `log ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args){
         console.log("colling fn...");

         return target.apply(thisArg, args).toUpperCase();
    }
})


// Class

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const personProxy = new Proxy(Person,{
    construct(target, args){
        console.log("Construct");

        target['age']+=100;

        return new target(...args)
    }
});


const personProxyObj = new personProxy('Lee', 21);
