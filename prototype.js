
Object.prototype.sayHello = function(){
    console.log("Hello");
}

const person = {
    name: "Lee",
    age: 21,
    greet: function(){
        console.log(`${this.name} + ${this.age}`)
    }
}

const lena = Object.create(person);

let str = new String("Hello i am string");
