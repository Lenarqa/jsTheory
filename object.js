const person = Object.create({
    calculateAge(){
        console.log(new Date().getFullYear() - this.birthYear);
    }
}, {
    name:{
        value: "Lee",
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear:{
        value: 1998,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age:{
        get(){
            return  new Date().getFullYear() - this.birthYear;
        },
        set(age){
            console.log("age = " ,age);
        }
    }
});

for(let key in person){
    if(person.hasOwnProperty(key)){
        console.log('key = ' + key + " value = "+ person[key]);
    }
}