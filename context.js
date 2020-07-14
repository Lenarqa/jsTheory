function hello(){
    console.log("Hello fun" + this);
}

const person = {
    name: "Lee",
    age: 21,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone){
        console.log(`${this.name} + ${this.age} + ${job} + ${phone}`);
    }
}

const lena ={
    name: 'lena',
    age: 20
}

// передаем контекст лены в метод лог инфо
// person.logInfo.bind(lena)();

// let fnLenaInfoLog = person.logInfo.bind(lena,'front', '8888');//возвращает функцию
// fnLenaInfoLog('frontend','999');
person.logInfo.call(lena, 'frontend', '999');

person.logInfo.apply(lena, ['frontend', '111']); //сразу вызывает 

const array = [1,2,3,4,5];

Array.prototype.multBy = function(n){
    return this.map((i)=>{
        return i * n;
    })
}

console.log(array.multBy(2));
console.log(array);
